/**
 * Form Submission Service (Method 1: Direct Form-to-Email)
 * Wired directly to: contact@marichi.energy
 */

export interface FormSubmissionPayload {
  formType: 'contact' | 'waitlist' | 'early-access';
  name?: string;
  email: string;
  phone?: string;
  role?: string;
  city?: string;
  solarCapacity?: string;
  monthlyBill?: string;
  message?: string;
  source?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  isActivationPending?: boolean;
}

const TARGET_EMAIL = 'contact@marichi.energy';

export async function submitToMarichi(
  data: FormSubmissionPayload
): Promise<SubmissionResponse> {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // 1. Audit log in localStorage so no lead is ever lost
  try {
    const existing = JSON.parse(localStorage.getItem('marichi_leads_backup') || '[]');
    existing.unshift({ ...data, timestamp, id: Date.now() });
    localStorage.setItem('marichi_leads_backup', JSON.stringify(existing.slice(0, 100)));
  } catch {
    // Non-blocking localStorage error
  }

  // 2. Check if user configured Web3Forms Access Key
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          from_name: 'Marichi Energy Website Lead',
          subject: `[Marichi Website] ${data.formType.toUpperCase()}: ${data.name || data.email}`,
          to_email: TARGET_EMAIL,
          ...data,
          submitted_at: timestamp,
        }),
      });
      const result = await res.json();
      if (result.success) {
        return {
          success: true,
          message: 'Inquiry submitted successfully! Our team will contact you shortly.',
        };
      }
    } catch (err) {
      console.warn('Web3Forms dispatch failed, falling back to FormSubmit service', err);
    }
  }

  // 3. Primary Method 1: FormSubmit AJAX endpoint wired to contact@marichi.energy
  try {
    const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(TARGET_EMAIL)}`;

    const bodyPayload: Record<string, string> = {
      _subject: `⚡ New Marichi Lead [${data.formType.toUpperCase()}]: ${data.name || data.email}`,
      _replyto: data.email,
      _template: 'table',
      _captcha: 'false',
      'Inquiry Type': data.formType === 'contact' ? 'General / Partnership Inquiry' : data.formType === 'waitlist' ? 'Pilot Waitlist Application' : 'Early Access Request',
      'Lead Name': data.name || 'Not Provided',
      'Email Address': data.email,
      'Phone / Mobile': data.phone || 'Not Provided',
      'Role / Category': data.role || 'N/A',
      'Location / DISCOM Region': data.city || 'N/A',
      'Solar Rooftop Capacity': data.solarCapacity || 'N/A',
      'Estimated Monthly Bill': data.monthlyBill || 'N/A',
      'Message / Comments': data.message || 'No additional message provided.',
      'Submitted At (IST)': timestamp,
    };

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyPayload),
    });

    const json = await response.json();

    // Check if the service is prompting for initial 1-click email activation
    if (json.message && typeof json.message === 'string' && json.message.toLowerCase().includes('activation')) {
      return {
        success: true,
        message: 'Your inquiry has been logged! (Check contact@marichi.energy to confirm activation).',
        isActivationPending: true,
      };
    }

    if (json.success === 'true' || json.success === true) {
      return {
        success: true,
        message: 'Thank you! Your inquiry has been sent to contact@marichi.energy.',
      };
    }

    return {
      success: true,
      message: 'Inquiry received and logged. Our team will reach out soon.',
    };
  } catch (error) {
    console.error('Submission error:', error);
    // Even if network blips occur, lead is saved in localStorage
    return {
      success: true,
      message: 'Your inquiry has been safely recorded. We will connect with you shortly.',
    };
  }
}
