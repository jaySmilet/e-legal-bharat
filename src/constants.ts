const BASE_PATH = import.meta.env.BASE_URL; // this equals '/e-legal-bharat/' in your case

const BASE_IMAGE_PATH = `${BASE_PATH}assets/`;
const BASE_IMAGE_SERVICE_PATH = `${BASE_IMAGE_PATH}services/`;
const BASE_IMAGE_SERVICE_FALLACK_PATH = `${BASE_IMAGE_SERVICE_PATH}default/`;

export {BASE_IMAGE_PATH, BASE_IMAGE_SERVICE_PATH, BASE_IMAGE_SERVICE_FALLACK_PATH};