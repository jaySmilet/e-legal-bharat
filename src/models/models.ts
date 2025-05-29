export interface Services {
  id: number;
  serviceType: ServiceType;
  data: {
    main: ServiceMainData;
    secondary: ServiceSecondaryData;
  };
  pricings: PricingCard;
  notifications?: Notification1[];
  steps: STEP;
  faqs: FAQ;
}

export interface OverviewSection {
  title: string;
  desc: string; // Allow HTML as string for rich content
}

export interface ServiceMainData {
  title: string;
  subtitle1: string;
  subtitle2: string;
  images: ServiceImage[];
}

export interface ServiceSecondaryData {
  overview: OverviewSection;
}

export type ServiceImage = {
  name: string;
  url: string;
  fallBackUrl: string;
};

export enum ServiceType {
  UDYAM = "UDYAM REGISTRATION",
  FSSAI = "FSSAI REGISTRATION",
  GST = "GST REGISTRATION",
  ITR = "ITR FILLING",
  MSME = "MSME REGISTRATION",
  TRADEMARK = "TRADEMARK REGISTRATION",
  ISO = "ISO CERTIFICATION",
  IEC = "IEC REGISTRATION",
  TAN = "TAN REGISTRATION",
  DIN = "DIN REGISTRATION",
  LLP = "LLP REGISTRATION",
}

export enum RoutePath {
  HOME = "home",
  ABOUT = "about",
  SERVICES = "services",
  CONTACT = "contact",
  SERVICE = "/services/:serviceType",
  NOT_FOUND = "*",
}

export interface Notification1 {
  id: number;
  notificationMsg: string;
  serviceType: ServiceType;
  isIcon?: boolean;
}

export interface UserContact {
  name: string;
  email?: string;
  mobile: string;
  location: string;
  businessName: string;
  message?: string;
  haveGstNumber?: boolean;
}

export type PricingCardItem = {
  title: string;
  status?: string;
  desc: string;
  price: number;
  billingBy: string;
  features: string[];
};

export interface PricingCard {
  data: PricingCardItem[];
  serviceType: ServiceType;
  title: string;
}

export type StepItem = {
  stepIndex: number;
  title: string;
  description: string;
};

export interface STEP {
  data: StepItem[];
  serviceType: ServiceType;
  title: string;
  subtitle: string;
}

export type FaqItem = {
  index?: number;
  question: string;
  answer: string;
};

export interface FAQ {
  data: FaqItem[];
  serviceType: ServiceType;
  title: string;
  subtitle: string;
}

export interface HomeContent {
  id: number;
  serviceType?: ServiceType;
  title: string;
  desc: string;
  icon: string;
}
