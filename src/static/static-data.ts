import {
  FAQ,
  Notification1,
  Services,
  ServiceType,
  STEP,
  UserContact,
} from "../models/models";
import { PricingCard } from "../models/models";
import { getServiceImages, parseServiceTypeLowerCase } from "../utils/utils";
import { htmlContent } from "./html-content";

export const ALL_FAQ: FAQ[] = [
  {
    title: "Frequently Asked Questions (FAQs)",
    subtitle: "Here are some common questions about FSSAI registration:",
    serviceType: ServiceType.FSSAI,
    data: [
      {
        index: 1,
        question: "Who needs FSSAI registration?",
        answer:
          "All food business operators (FBOs) including manufacturers, transporters, distributors, retailers, and food stall vendors must obtain FSSAI registration/license.",
      },
      {
        index: 2,
        question: "What are the types of FSSAI licenses?",
        answer: `
        <ul>
        <li>Basic Registration – for small FBOs with turnover up to ₹12 lakh/year</li>
        <li>State License – for FBOs with turnover between ₹12 lakh to ₹20 crore/year</li>
        <li>Central License – for large FBOs with turnover above ₹20 crore/year or operating in multiple states</li>
        </ul>`,
      },
      {
        index: 3,
        question:
          "Is FSSAI registration mandatory for homemade food sellers or home-based bakers?",
        answer:
          "Yes, if the annual turnover exceeds ₹12 lakh. Below this, basic registration is sufficient.",
      },
      {
        index: 4,
        question: "How to apply for FSSAI registration?",
        answer: "You can apply online through the FSSAI FoSCoS portal.",
      },
      {
        index: 6,
        question: "What documents are required for FSSAI registration?",
        answer: `
        <ul>
        <li>Photo ID and address proof of the applicant</li>
        <li>Business name and address</li>
        <li>Passport-size photograph</li>
        <li>Food safety management plan (for some categories)</li>
        <li>Other business-related documents depending on the license type</li>
        </ul>`,
      },
      {
        index: 7,
        question: "How long does it take to get an FSSAI license?",
        answer: `
        <ul>
        <li><b>Basic Registration:</b> 7 working days (subject to approval)</li>
        <li><b>State/Central License:</b> 30 to 60 working days</li>
        </ul>`,
      },
      {
        index: 8,
        question: "Is physical inspection required for FSSAI registration?",
        answer:
          "In most cases of State and Central licenses, yes. Not always needed for Basic Registration.",
      },
      {
        index: 9,
        question: "How long is the FSSAI license valid?",
        answer:
          "1 to 5 years, depending on the application. It must be renewed before expiry.",
      },
      {
        index: 10,
        question: "What is the renewal process for an FSSAI license?",
        answer:
          "Renewal must be done through the FoSCoS portal at least 30 days before expiry.",
      },
      {
        index: 11,
        question: "Can I operate my food business without FSSAI registration?",
        answer:
          "No, operating a food business without registration is illegal and punishable under the FSS Act.",
      },
      {
        index: 12,
        question:
          "Is the FSSAI logo and license number mandatory on packaging?",
        answer:
          "Yes, all packaged food must carry the FSSAI logo and the 14-digit license number.",
      },
      {
        index: 13,
        question: "What happens if I do not renew my license on time?",
        answer:
          "A late fee of ₹100 per day is applicable, and continued delay may lead to cancellation or penalty.",
      },
      {
        question: "Can I make changes to my existing FSSAI license?",
        answer:
          "Yes, you can apply for modification through the FoSCoS portal.",
      },
    ],
  },
  {
    title: "Frequently Asked Questions (FAQs)",
    subtitle: "Here are some common questions about Udyam registration:",
    serviceType: ServiceType.UDYAM,
    data: [
      {
        index: 1,
        question: "Is Udyam registration mandatory?",
        answer:
          "Yes, it is mandatory for businesses to register as MSMEs to avail government benefits.",
      },
      {
        index: 2,
        question: "How long does it take to receive the certificate?",
        answer: "Typically within 1-2 working days after submission.",
      },
      {
        index: 3,
        question: "Is GST mandatory for Udyam registration?",
        answer: "Only if your business is required to be registered under GST.",
      },
    ],
  },
];

export const Notifications: Notification1[] = [
  {
    id: 1,
    serviceType: ServiceType.FSSAI,
    notificationMsg:
      "Attention : Running a Food Business Without a License Can Lead to Rs. 5 Lakh Fine & 6 Months in Jail!",
    isIcon: true,
  },
  {
    id: 2,
    serviceType: ServiceType.FSSAI,
    notificationMsg:
      "Stay compliant and protect your business—get your food license today!",
  },
];

export const serviceImageMap: Record<string, string[]> = {
  "udyam-registration": ["udyam.png", "msme.png", "process.jpg"],
  "fssai-registration": [
    "fssai-fsm.png",
    "fssai-logo.webp",
    "fssai-certificate.webp",
  ],
  default: ["no-image.webp"],
};

export const ALL_Steps: STEP[] = [
  {
    title: "Steps to Get FSSAI Registration",
    subtitle:
      "Follow these simple steps to get your FSSAI registration done quickly and easily.",
    serviceType: ServiceType.FSSAI,
    data: [
      {
        stepIndex: 1,
        title: "Submit Basic Details",
        description:
          "Fill out our simple online form with your name, business type, and contact information.",
      },
      {
        stepIndex: 2,
        title: "Upload Documents",
        description: `Upload clear copies of:
<ul> 
<li>Aadhaar and PAN card</li>
<li>Passport-size photo</li>
<li>Proof of business address (like electricity bill or rent agreement)</li>
</ul>`,
      },
      {
        stepIndex: 3,
        title: "We Prepare Your Application",
        description:
          "Our team will accurately fill out your FSSAI application on your behalf.",
      },
      {
        stepIndex: 4,
        title: "Online Payment",
        description:
          "Pay the registration fee securely online (includes govt. + service charges).",
      },
      {
        stepIndex: 5,
        title: "Application Submission",
        description:
          "We submit your application to FSSAI and share the tracking details.",
      },
      {
        stepIndex: 6,
        title: "Get Your FSSAI Certificate",
        description:
          "Once approved, receive your FSSAI Registration Certificate and ID Card by email/WhatsApp. You’re now legally ready to start!",
      },
    ],
  },
  {
    title: "Steps to Get Udyam Or MSME Registration",
    subtitle:
      "Follow these simple steps to get your Udyam Or MSME registration done quickly and easily.",
    serviceType: ServiceType.UDYAM,
    data: [
      {
        stepIndex: 1,
        title: "Submit your basic details and document",
        description:
          "Fill out our simple online form with your name, business type, and contact information.",
      },
      {
        stepIndex: 2,
        title: "Upload Documents",
        description: `Upload clear copies of:
<ul> 
<li>Aadhaar and PAN card</li>
<li>Passport-size photo</li>
<li>Bank Account Details with Passbook first page photocopy that clearly mention Account No., IFS Code & Name with a latest valid photgraph</li>
<li>Proof of business address (like electricity bill or rent agreement)</li>
</ul>`,
      },
      {
        stepIndex: 3,
        title: "We Prepare Your Application",
        description:
          "Our team will accurately fill out your MSME application on your behalf.",
      },
      {
        stepIndex: 4,
        title: "Online Payment",
        description:
          "Pay the registration fee securely online (includes govt. + service charges).",
      },
      {
        stepIndex: 5,
        title: "Application Submission",
        description:
          "We submit your application to Udyam and share the tracking details.",
      },
      {
        stepIndex: 6,
        title: "Get Your Udyam Certificate",
        description:
          "Once approved, receive your Udyam Registration Certificate and ID Card by email/WhatsApp. You’re now legally ready to start!",
      },
    ],
  },
];

export const ALL_Pricing: PricingCard[] = [
  {
    title: "Trusted FSSAI Licensing, Straightforward Pricing",
    serviceType: ServiceType.FSSAI,
    data: [
      {
        title: "Basic Registration",
        status: "Trending",
        desc: "Small food businesses, home-based bakers, petty food vendors",
        price: 1499,
        billingBy: "Billed annually, cancel anytime",
        features: [
          "For businesses with turnover up to ₹12 lakhs/year",
          "FSSAI Basic Registration (Form A)",
          "Valid for 1–5 years",
          "Document preparation & filing",
          "Government fee included",
          "Expert consultation",
        ],
      },
      {
        title: "State License",
        desc: "Medium-sized businesses, restaurants, traders, etc.",
        price: 3999,
        billingBy: "Billed annually, cancel anytime",
        features: [
          "For turnover between ₹12 lakhs – ₹20 crore/year",
          "FSSAI State License (Form B)",
          "Validity: 1–5 years",
          "Documentation & filing assistance",
          "Application tracking",
          "Support during inspection (if needed)",
        ],
      },
      {
        title: "Central License",
        desc: "Large-scale food businesses, exporters, importers, multi-state operators.",
        price: 7999,
        billingBy: "Billed annually, cancel anytime",
        features: [
          "For turnover above ₹20 crore/year or multi-state presence",
          "FSSAI State License (Form B)",
          "All India applicability",
          "Comprehensive document handling",
          "End-to-end expert support",
          "Priority processing",
        ],
      },
      {
        title: "FSSAI Renewal Service",
        desc: "Existing FSSAI license holders nearing expiry",
        price: 1299,
        billingBy: "Billed on request",
        features: [
          "Timely renewal to avoid penalties",
          "Validity extension for 1–5 years",
          "Application filing & status updates",
          "Free consultation for upgrades (if needed in future)",
        ],
      },
      {
        title: "FSSAI Modification",
        desc: "Businesses changing address, scope, or category",
        price: 1999,
        billingBy: "Billed on request",
        features: [
          "Modify existing FSSAI license",
          "Update address, business type, or add products",
          "Expert document check",
          "Swift application filing",
        ],
      },
    ],
  },
  {
    title: "Get Your Udyam Certificate Now",
    serviceType: ServiceType.UDYAM,
    data: [
      {
        title: "Basic Registration",
        status: "Trending",
        desc: "All business from a small shop to entrprise organization",
        price: 599,
        billingBy: "Billed on request",
        features: [
          "Includes consultation, application filing, and certificate delivery",
        ],
      },
    ],
  },
];

// Make sure getServiceImages is defined or imported before this usage
export const ServiceData: Services[] = [
  {
    id: 1,
    serviceType: ServiceType.UDYAM,
    data: {
      main: {
        title: "Udyam Registration (MSME Certificate)",
        subtitle1: "Start Your Udyam Registration",
        subtitle2:
          "Get your MSME certificate quickly and easily with our expert help!",
        images: getServiceImages(
          ServiceType.UDYAM,
          serviceImageMap[parseServiceTypeLowerCase(ServiceType.UDYAM)]
        ),
      },
      secondary: {
        overview: {
          title: "Why Choose Us?",
          desc: htmlContent.filter(
            (content) => content.serviceType === ServiceType.UDYAM
          )[0].content,
        },
      },
    },
    pricings: ALL_Pricing.filter(
      (pricing) => pricing.serviceType === ServiceType.UDYAM
    )[0],
    notifications: [],
    steps: ALL_Steps.filter(
      (steps) => steps.serviceType === ServiceType.UDYAM
    )[0],
    faqs: ALL_FAQ.filter((faq) => faq.serviceType === ServiceType.UDYAM)[0],
  },
  {
    id: 2,
    serviceType: ServiceType.FSSAI,
    data: {
      main: {
        title: "Your FSSAI License, Faster",
        subtitle1: "Need your FSSAI Registration Certificate?",
        subtitle2:
          "We make it super easy to apply online through the FOSCOS portal. Just reach out to us, and we’ll help you get it done fast and hassle-free!",
        images: getServiceImages(
          ServiceType.FSSAI,
          serviceImageMap[parseServiceTypeLowerCase(ServiceType.FSSAI)]
        ),
      },
      secondary: {
        overview: {
          title:
            "FSSAI Registration for Food Businesses (FBOs) – A Quick Overview",
          desc: htmlContent.filter(
            (content) => content.serviceType === ServiceType.FSSAI
          )[0].content,
        },
      },
    },
    pricings: ALL_Pricing.filter(
      (pricing) => pricing.serviceType === ServiceType.FSSAI
    )[0],
    notifications: Notifications.filter(
      (notification) => notification.serviceType === ServiceType.FSSAI
    ),
    steps: ALL_Steps.filter(
      (steps) => steps.serviceType === ServiceType.FSSAI
    )[0],
    faqs: ALL_FAQ.filter((faq) => faq.serviceType === ServiceType.FSSAI)[0],
  },
  // {
  //     id:3,
  //     title: "GST Registration",
  //     description: "GST Registration is required for businesses in India that have a turnover above a certain threshold. It allows businesses to collect and pay Goods and Services Tax (GST) on their sales and purchases.",
  //     serviceType: ServiceType.GST,},
  // {
  //     id:4,
  //     title: "ITR Filing",
  //     description: "ITR Filing is the process of submitting income tax returns to the Income Tax Department in India. It is mandatory for individuals and businesses with taxable income. The filing process involves reporting income, deductions, and tax liabilities.",
  //     serviceType: ServiceType.ITR,}
];

export const initialUserContact: UserContact = {
  name: "",
  mobile: "",
  location: "",
  businessName: "",
  message: "",
  haveGstNumber: false,
};
