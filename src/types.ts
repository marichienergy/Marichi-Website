export type UserRole = 'prosumer' | 'consumer' | 'business' | 'discom';

export interface StatItem {
  id: string;
  value: string;
  numberValue?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  target: 'Prosumer' | 'Consumer' | 'Both';
  iconName: string;
  metric?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string;
}

export interface CalculatorState {
  role: 'prosumer' | 'consumer';
  systemSizeKw: number;
  monthlyUnitsKwh: number;
  discomState: string;
}

export interface WaitlistSubmission {
  email: string;
  name?: string;
  role: UserRole;
  city: string;
  solarCapacity?: string;
}
