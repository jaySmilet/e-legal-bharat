import { BASE_IMAGE_SERVICE_FALLACK_PATH, BASE_IMAGE_SERVICE_PATH } from "../constants";
import { ServiceImage, ServiceType } from "../models/models";

const parseServiceTypeLowerCase = (serviceType: ServiceType):string => {
    return serviceType.toLowerCase().replace(/\s+/g, "-");
}

const parseServiceTypeUpperCase = (serviceType: string):ServiceType => {
    return serviceType.toUpperCase().replace(/-/g, " ") as ServiceType;
}

const getServiceContactTxt = (serviceType: ServiceType): string => {
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

/**
 * Gets an array of service images from the public/assets folder.
 * Only includes images that exist (optional).
 */
const getServiceImages = (serviceType: ServiceType, imageNames: string[]): ServiceImage[] => {
   return imageNames.map((filename) => ({
    name: filename.split(".")[0], //name without extension
    url: `${BASE_IMAGE_SERVICE_PATH}${parseServiceTypeLowerCase(serviceType)}/${filename}`,
    fallBackUrl: `${BASE_IMAGE_SERVICE_FALLACK_PATH}${filename}` // If the constant is misspelled, fix it to BASE_IMAGE_SERVICE_FALLBACK_PATH
   }));
}

// The above code defines two utility functions for parsing service types.
export { parseServiceTypeLowerCase, parseServiceTypeUpperCase, getServiceContactTxt, getServiceImages };
// The above code defines two utility functions for parsing service types.