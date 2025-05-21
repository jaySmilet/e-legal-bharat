import { ServiceType } from "../models/models";

const parseServiceTypeLowerCase = (serviceType: ServiceType):string => {
    return serviceType.toLowerCase().replace(/\s+/g, "-");
}

const parseServiceTypeUpperCase = (serviceType: string):ServiceType => {
    return serviceType.toUpperCase().replace(/-/g, " ") as ServiceType;
}
// The above code defines two utility functions for parsing service types.
export { parseServiceTypeLowerCase, parseServiceTypeUpperCase };
// The above code defines two utility functions for parsing service types.