import { BenefitItem, HowItWorksStep, StatItem, TeamMember } from './types';

export const STATS_DATA: StatItem[] = [
  {
    id: 'kw-listed',
    value: '500+',
    numberValue: 500,
    suffix: '+ kW',
    label: 'Capacity Listed',
    sublabel: 'Rooftop solar registered',
  },
  {
    id: 'prosumers',
    value: '50+',
    numberValue: 50,
    suffix: '+',
    label: 'Prosumers Onboarded',
    sublabel: 'Active grid peers',
  },
  {
    id: 'yield',
    value: '+38%',
    numberValue: 38,
    suffix: '%',
    label: 'Higher Prosumer Yield',
    sublabel: 'vs standard net-metering',
  },
  {
    id: 'compliance',
    value: '100%',
    numberValue: 100,
    suffix: '%',
    label: 'Regulated & Compliant',
    sublabel: 'Smart Grid Sandbox',
  },
];

export const PROSUMER_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Connect Your Smart Meter',
    description: 'Link your existing DISCOM bi-directional AMI smart meter in 2 minutes. Zero new hardware required.',
    highlight: 'Instant meter verification via smart grid AMI',
    iconName: 'Zap',
  },
  {
    step: 2,
    title: 'List Surplus Solar Energy',
    description: 'Our automated algorithms predict daytime solar surplus and publish availability across the local distribution network.',
    highlight: 'Dynamic floor pricing at ₹5.50 - ₹6.20/kWh',
    iconName: 'SunMedium',
  },
  {
    step: 3,
    title: 'Match with Nearby Consumers',
    description: 'Energy is routed virtually through the local distribution transformer to verified neighbors, shops, and EV owners.',
    highlight: 'Hyperlocal wheeling & banking sync',
    iconName: 'Share2',
  },
  {
    step: 4,
    title: 'Receive Automated Daily Payouts',
    description: 'Direct credits to your UPI bank account on a T+1 settlement basis with complete DISCOM bill ledger reconciliation.',
    highlight: 'Guaranteed 30-40% higher returns',
    iconName: 'Banknote',
  },
];

export const CONSUMER_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Sign Up with Your Consumer ID',
    description: 'Input your electricity connection consumer number. No rooftop or solar panels needed on your property.',
    highlight: 'Available for tenants & homeowners',
    iconName: 'Zap',
  },
  {
    step: 2,
    title: 'Discover Local Solar Feeds',
    description: 'Browse available solar generation from certified prosumers connected to your local substation feeder.',
    highlight: '100% verified green power source',
    iconName: 'Compass',
  },
  {
    step: 3,
    title: 'Lock In Discounted Energy Rates',
    description: 'Subscribe to nearby solar batches at ₹6.20 - ₹6.80/kWh, saving significantly compared to peak commercial or domestic slabs.',
    highlight: 'Save up to 25% on peak monthly units',
    iconName: 'PiggyBank',
  },
  {
    step: 4,
    title: 'Enjoy Net-Billed Savings',
    description: 'Power units drawn from peers reflect automatically as adjusted green credits on your monthly utility electricity bill.',
    highlight: 'Automated SERC approved settlement',
    iconName: 'FileCheck',
  },
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'higher-yield',
    title: '30-40% Higher Returns for Prosumers',
    description: 'Standard utility net-metering pays prosumers as little as ₹2.50 to ₹3.20 per unit. On Marichi P2P, earn ₹5.50 to ₹6.20/kWh for your daytime rooftop surplus.',
    target: 'Prosumer',
    iconName: 'TrendingUp',
    metric: '+₹3.00/kWh vs Net-Metering',
  },
  {
    id: 'cheaper-power',
    title: 'Up to 25% Lower Bills for Consumers',
    description: 'Offices, commercial shops, EV drivers, and apartments can buy local green rooftop solar at lower rates than DISCOM peak-slab grid tariffs.',
    target: 'Consumer',
    iconName: 'Zap',
    metric: 'Save up to ₹2.20/kWh',
  },
  {
    id: 'zero-hardware',
    title: 'Zero Extra Hardware Required',
    description: 'Marichi operates purely on the digital layer. We connect into existing IS 16444 / IS 15959 compliant smart meters and distribution telemetry.',
    target: 'Both',
    iconName: 'Cpu',
    metric: '100% Cloud & Software',
  },
  {
    id: 'instant-settlement',
    title: 'Automated UPI AutoPay Settlements',
    description: 'No waiting months for utility credits or manual billing adjustments. Prosumers receive daily direct bank payouts via NPCI UPI AutoPay.',
    target: 'Prosumer',
    iconName: 'Banknote',
    metric: 'T+1 Daily Payouts',
  },
  {
    id: 'green-impact',
    title: 'Measurable Local Decarbonization',
    description: 'Trace every kilowatt-hour back to a specific rooftop in your neighborhood. Download verified green certificates for ESG reporting.',
    target: 'Consumer',
    iconName: 'Leaf',
    metric: '0.82 kg CO2 Offset / kWh',
  },
  {
    id: 'regulatory-compliant',
    title: 'DISCOM & Regulatory Compliant',
    description: 'Architected in complete compliance with CEA guidelines, State Electricity Regulatory Commissions (SERCs), and national clean energy frameworks.',
    target: 'Both',
    iconName: 'ShieldCheck',
    metric: '100% Regulated Sandbox',
  },
];

export const PARTNERS_DATA = [
  {
    name: 'IITM Incubation Cell',
    role: 'Deep-Tech Incubation & R&D',
    abbr: 'IITMIC',
  },
  {
    name: 'MSME',
    role: 'Micro, Small & Medium Enterprises',
    abbr: 'Govt. of India',
  },
  {
    name: 'DPIIT #startupindia',
    role: 'Department for Promotion of Industry and Internal Trade',
    abbr: 'DPIIT',
  },
  {
    name: 'Make In India',
    role: 'National Clean Energy Innovation Initiative',
    abbr: 'Make In India',
  },
];

export const DISCOM_PRESETS = [
  {
    id: 'bescom',
    name: 'BESCOM (Bengaluru / Karnataka)',
    discomNetFeedIn: 3.12,
    discomGridTariff: 8.45,
    p2pFloorPrice: 5.80,
    p2pBuyerPrice: 6.60,
  },
  {
    id: 'bses',
    name: 'BSES / Tata Power (Delhi NCR)',
    discomNetFeedIn: 2.90,
    discomGridTariff: 8.50,
    p2pFloorPrice: 5.60,
    p2pBuyerPrice: 6.50,
  },
  {
    id: 'uppcl',
    name: 'UPPCL / PVVNL (Uttar Pradesh / Noida & Lucknow)',
    discomNetFeedIn: 3.00,
    discomGridTariff: 8.70,
    p2pFloorPrice: 5.75,
    p2pBuyerPrice: 6.65,
  },
  {
    id: 'msedcl',
    name: 'MSEDCL (Mumbai / Maharashtra)',
    discomNetFeedIn: 3.40,
    discomGridTariff: 9.20,
    p2pFloorPrice: 6.00,
    p2pBuyerPrice: 7.10,
  },
];
