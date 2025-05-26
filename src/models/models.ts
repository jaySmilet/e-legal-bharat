export interface Services {
    id: number;
    title: string;
    description?: string;
    image?: string;
    serviceType: ServiceType;
}
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
    LLP = "LLP REGISTRATION",}

export enum RoutePath {
    HOME = "home",     
    ABOUT = "about", 
    SERVICES = "services",
    CONTACT = "contact",
    SERVICE = "/services/:serviceType",
    NOT_FOUND = "*",}

export interface Notification1{
    id: number;
    notificationMsg:string;
    notificationType:ServiceType;
    isIcon?:boolean;
}    

export interface UserContact{
    name: string;
    email?: string;
    mobile: string;
    location: string;
    businessName: string;
    message?: string;
    haveGstNumber?: boolean;
}

export interface FAQ {
    index?: number;
    question: string;
    answer: string;
}

export interface PricingCard {
  title: string;
  status?: string;
  desc: string;
  price: number;
  billingBy: string;
  features: string[];
}