import {
  BASE_IMAGE_SERVICE_FALLACK_PATH,
  BASE_IMAGE_SERVICE_PATH,
} from "../constants";
import { ServiceImage, ServiceType } from "../models/models";

const parseServiceTypeLowerCase = (serviceType: ServiceType): string => {
  return serviceType.toLowerCase().replace(/\s+/g, "-");
};

const parseServiceTypeUpperCase = (serviceType: string): ServiceType => {
  return serviceType.toUpperCase().replace(/-/g, " ") as ServiceType;
};

const getServiceContactTxt = (serviceType: ServiceType): string => {
  switch (serviceType) {
    case ServiceType.UDYAM:
      return "Need Help with Udyam Registration?";
    case ServiceType.FSSAI:
      return "Have Questions About FSSAI Registration?";
    case ServiceType.GST:
      return "Start Your GST Registration Today!";
    case ServiceType.ITR:
      return "ITR Filing Made Simple – Talk to Us!";
    case ServiceType.MSME:
      return "Quick Support for MSME Registration";
    case ServiceType.TRADEMARK:
      return "Trademark Queries? We're Here to Help!";
    case ServiceType.ISO:
      return "Get ISO Certified – Contact Now!";
    case ServiceType.IEC:
      return "Need Help with IEC Registration?";
    case ServiceType.TAN:
      return "Confused About TAN? Let’s Talk!";
    case ServiceType.DIN:
      return "DIN Registration Help in One Click";
    case ServiceType.LLP:
      return "LLP Registration Support Made Easy";
    default:
      return "Let’s Discuss Your Query";
  }
};

/**
 * Gets an array of service images from the public/assets folder.
 * Only includes images that exist (optional).
 */
const getServiceImages = (
  serviceType: ServiceType,
  imageNames: string[]
): ServiceImage[] => {
  return imageNames.map((filename) => ({
    name: filename.split(".")[0], //name without extension
    url: `${BASE_IMAGE_SERVICE_PATH}${parseServiceTypeLowerCase(
      serviceType
    )}/${filename}`,
    fallBackUrl: `${BASE_IMAGE_SERVICE_FALLACK_PATH}no-image.webp`, // If the constant is misspelled, fix it to BASE_IMAGE_SERVICE_FALLBACK_PATH
  }));
};

// The above code defines two utility functions for parsing service types.
export {
  parseServiceTypeLowerCase,
  parseServiceTypeUpperCase,
  getServiceContactTxt,
  getServiceImages,
};
// The above code defines two utility functions for parsing service types.
