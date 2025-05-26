import { ServiceType } from "../models/models";

const parseServiceTypeLowerCase = (serviceType: ServiceType):string => {
    return serviceType.toLowerCase().replace(/\s+/g, "-");
}

const parseServiceTypeUpperCase = (serviceType: string):ServiceType => {
    return serviceType.toUpperCase().replace(/-/g, " ") as ServiceType;
}

export const getServiceContactTxt = (serviceType: ServiceType): string => {
    switch (serviceType) {
        case ServiceType.UDYAM:
            return "Contact us for Udyam Registration";
        case ServiceType.FSSAI:
            return "Quick & Free FSSAI Guidance";
        case ServiceType.GST:
            return "Contact us for GST Registration";
        case ServiceType.ITR:
            return "Contact us for ITR Filing";
        case ServiceType.MSME:
            return "Contact us for MSME Registration";
        case ServiceType.TRADEMARK:
            return "Contact us for Trademark Registration";
        case ServiceType.ISO:
            return "Contact us for ISO Certification";
        case ServiceType.IEC:
            return "Contact us for IEC Registration";
        case ServiceType.TAN:
            return "Contact us for TAN Registration";
        case ServiceType.DIN:
            return "Contact us for DIN Registration";
        case ServiceType.LLP:
            return "Contact us for LLP Registration";
        default:
            return "Contact us for more information";
    }
}

// The above code defines two utility functions for parsing service types.
export { parseServiceTypeLowerCase, parseServiceTypeUpperCase };
// The above code defines two utility functions for parsing service types.