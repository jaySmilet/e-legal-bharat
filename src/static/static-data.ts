import {
  FAQ,
  HomeContent,
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
  {
    title: "Frequently Asked Questions (FAQs) – GST Registration",
    subtitle: "Here are some common questions about GST Registration:",
    serviceType: ServiceType.GST,
    data: [
      {
        index: 1,
        question: "What is GST Registration and who should apply?",
        answer:
          "GST Registration is mandatory for businesses with annual turnover above ₹40 lakhs (₹20 lakhs for services). It is also required for online sellers, exporters, and inter-state suppliers. Anyone who wants to legally collect tax and claim input tax credit must register under GST. ",
      },
      {
        index: 2,
        question: "Can an individual or freelancer apply for GST registration?",
        answer:
          "Yes! Even if you're a freelancer, consultant, or self-employed service provider, you can apply for GST Registration and issue GST-compliant invoices to clients. ",
      },
      {
        index: 3,
        question: "What documents are required for GST Registration?",
        answer: `Common documents include:
        <ul>
        <li>PAN Card of business owner</li>
        <li>Aadhaar Card</li>
        <li>Passport size photo</li>
        <li>Address proof of business (electricity bill, rent agreement, NOC, etc.)</li>
        <li>Bank account details or cancelled cheque</li>
        </ul>
        Our team will guide you through exactly what’s needed based on your business type.
        `,
      },
      {
        index: 4,
        question: "How long does it take to get GST registration?",
        answer:
          "Typically, it takes 3–5 working days if all documents are valid and no queries are raised by the GST officer. Our team ensures the fastest possible turnaround.",
      },
      {
        index: 5,
        question:
          "Will you help if there's any clarification raised by the GST department?",
        answer:
          "Absolutely. If the GST officer requests clarification or document resubmission, our experts will handle the entire response on your behalf without extra charge (in Standard and Premium Plans).",
      },
      {
        index: 6,
        question: "Can I use the same GSTIN for multiple businesses?",
        answer:
          "No, GSTIN is issued per business entity and per state. If you operate different businesses or branches in different states, you’ll need separate GST registrations.",
      },
      {
        index: 7,
        question:
          "Will I receive the GST certificate in physical or digital format?",
        answer:
          "The GST Certificate is issued digitally by the government. We will email and WhatsApp you the certificate as a PDF document as soon as it’s approved.",
      },
      {
        index: 8,
        question:
          "Why should I register through your platform instead of doing it myself?",
        answer: `GST registration can involve technicalities like HSN/SAC codes, tax scheme selection, and officer clarifications. Our team ensures
        <ul>
        <li>Error-free filing</li>
        <li>Quick approval</li>
        <li>End-to-end support</li>
        <li>No need to deal with government portals yourself</li>
        `,
      },
      {
        index: 9,
        question: " Do I need to file GST returns after registration?",
        answer:
          "Yes, once you're registered, you must file GST returns regularly (monthly or quarterly) based on your business. We also provide GST return filing services at affordable rates.",
      },
      {
        index: 10,
        question: "What if I don’t register under GST when I’m supposed to?",
        answer:
          "Operating without GST registration when it's mandatory can lead to penalties, fines, and your business being marked non-compliant by authorities. It's best to get registered early with our help.",
      },
    ],
  },
  {
    title: "Frequently Asked Questions (FAQs)",
    subtitle:
      "Here are some common questions about ITR (Income Tax Return) filing:",
    serviceType: ServiceType.ITR,
    data: [
      {
        index: 1,
        question: "Who is required to file an Income Tax Return (ITR)?",
        answer:
          "Any individual whose annual income exceeds the basic exemption limit (₹2.5 lakhs for individuals below 60 years) is required to file an ITR. Additionally, those with foreign assets, claiming tax refunds, or fulfilling other conditions must also file.",
      },
      {
        index: 2,
        question: "What are the different types of ITR forms?",
        answer:
          "There are several types, like ITR-1 (Sahaj) for salaried individuals, ITR-2 for individuals with capital gains, ITR-3 for business/profession income, ITR-4 (Sugam) for presumptive income, and more depending on income type and source.",
      },
      {
        index: 3,
        question: "What is the due date for filing ITR?",
        answer:
          "The due date for individuals (non-audit cases) is typically July 31st of the assessment year. For businesses requiring audit, it’s usually October 31st. Deadlines may vary each year.",
      },
      {
        index: 4,
        question: "Can I file ITR after the due date?",
        answer:
          "Yes, you can file a belated return by December 31st of the assessment year. However, late filing may attract penalties and loss of certain benefits like carry forward of losses.",
      },
      {
        index: 5,
        question: "What documents are needed to file ITR?",
        answer:
          "Common documents include PAN, Aadhaar, Form 16, salary slips, bank statements, investment proofs, home loan interest certificates, and capital gains details (if applicable).",
      },
      {
        index: 6,
        question: "Do I need to visit the Income Tax Office to file ITR?",
        answer:
          "No, the entire process is online. You can file your ITR through our platform. Our experts will assist you in e-filing your return from the comfort of your home.",
      },
      {
        index: 7,
        question: "What happens if I don’t file ITR?",
        answer:
          "Non-filing of ITR can lead to penalties under section 234F, notices from the Income Tax Department, and legal action in severe cases. Filing ITR on time also helps with loan approvals and visa applications.",
      },
      {
        index: 8,
        question: "Can I revise my ITR after filing?",
        answer:
          "Yes, if you’ve made a mistake, you can revise your return before December 31st of the relevant assessment year or before the completion of assessment, whichever is earlier.",
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
  "gst-registration": ["gst1.png", "gst2.png", "gst.jpg"],
  "itr-filing": ["itr.jpg", "itr2.png", "itr1.png"],
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
  {
    title: "Our GST Registration Process – Step-by-Step",
    subtitle:
      " We take care of the legal work, so you don’t have to. Here’s how our expert team helps you get GST registered quickly and correctly.",
    serviceType: ServiceType.GST,
    data: [
      {
        stepIndex: 1,
        title: "Submit Basic Details",
        description: `
<ul> 
<li>You share your basic business and personal details—like name, PAN, business type, and contact number.</li>
<li>You can submit through our website, WhatsApp, email, or even talk to our support team directly.</li>
</ul>`,
      },
      {
        stepIndex: 2,
        title: "Document Collection & Verification",
        description: `
<ul> 
<li>Our team will guide you through the required documents based on your business type (Proprietorship, Partnership, LLP, or Company).</li>
<li>You can easily upload the scanned documents to our portal or send them via email.</li>
<li>We verify all documents to ensure they’re valid, complete, and compliant.</li>
</ul>`,
      },
      {
        stepIndex: 3,
        title: "Online Payment",
        description:
          "Pay the registration fee securely online (includes govt. + service charges).",
      },
      {
        stepIndex: 4,
        title: "Application Preparation by Experts",
        description: `
<ul> 
<li>Once verified, our professionals prepare your GST registration application on the official GST portal</li>
<li>We use accurate business codes (HSN/SAC), correct jurisdiction, and fill all technical sections as per GST rules. </li>
<li>You don’t need to worry about technical terms or form errors—<b>we handle it all.</b> </li>
</ul>`,
      },
      {
        stepIndex: 5,
        title: "Submission & ARN Generation",
        description: `
<ul> 
<li>After filing the application, we generate an<b>Acknowledgement Reference Number (ARN)</b>for your tracking.</li>
<li>If needed, we help you complete <b>OTP or e-sign verification</b> as per GST requirements.</li>
</ul>`,
      },
      {
        stepIndex: 6,
        title: "Follow-up & Clarification (If Needed)",
        description: `
<ul> 
<li>In some cases, the GST officer may raise a <b>query or clarification request.</b></li>
<li>Our team will <b>promptly respond</b> on your behalf and handle any required explanations or document resubmissions.</li>
</ul>`,
      },
      {
        stepIndex: 7,
        title: "GSTIN Issued & Certificate Delivered",
        description: `
<ul> 
<li>Upon approval, you receive your <b>GSTIN (Goods and Services Tax Identification Number)</b> via email and WhatsApp.</li>
<li>We also send you the official <b>v</b> and help you understand how to use it for invoicing and compliance.</li>
</ul>`,
      },
      {
        stepIndex: 8,
        title: "Post-Registration Support (Optional)",
        description: `
<ul> 
<li>We offer ongoing help for <b>GGST Return Filing, GST Invoicing, and Updates</b> like address changes or cancellations.</li>
<li>Our team stays connected in case you need help after registration.</li>
</ul>`,
      },
    ],
  },
  {
    title: "Step-by-Step ITR Filing Process",
    subtitle:
      "All applications go through our in-house expert team to ensure accuracy and compliance.",
    serviceType: ServiceType.ITR,
    data: [
      {
        stepIndex: 1,
        title: "Share Your Income Details",
        description:
          "Upload your salary slips, Form 16, bank statements, and any other relevant financial documents via our secure portal or WhatsApp.",
      },
      {
        stepIndex: 2,
        title: "Expert Tax Review",
        description:
          "Our team of tax professionals will review your documents, calculate your total income, eligible deductions, and applicable taxes.",
      },
      {
        stepIndex: 3,
        title: "Tax Computation & Return Preparation",
        description:
          "We prepare the return under the appropriate ITR form (ITR-1 to ITR-7) based on your income sources, including salaries, house property, business, or capital gains.",
      },
      {
        stepIndex: 4,
        title: "Client Review",
        description:
          "We’ll share the prepared ITR draft for your review. You can ask questions or request edits before submission.",
      },
      {
        stepIndex: 5,
        title: "Filing with the Income Tax Department",
        description:
          "Once approved, we e-file your return directly with the Income Tax Department and share the acknowledgment (ITR-V) with you.",
      },
      {
        stepIndex: 6,
        title: "Post-Filing Support",
        description:
          "If there are any issues like notices or refunds, our team will assist you at no extra charge.",
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
  {
    title: "Transparent & Affordable GST Registration Plans",
    serviceType: ServiceType.GST,
    data: [
      {
        title: "Basic Plan",
        status: "Trending",
        desc: "Freelancers, small traders, local businesses.For businesses with turnover < ₹20 lakhs",
        price: 599,
        billingBy: "Billed on request",
        features: [
          "GST Registration by Experts",
          "GST Certificate Delivery (PDF)",
          "Basic Compliance Guidance",
          "100% Online Process",
          "Support via WhatsApp/Call",
        ],
      },
      {
        title: "Standard Plan",
        status: "Populor",
        desc: "New startups, service providers, e-commerce sellers.For businesses with turnover > ₹20 lakhs",
        price: 999,
        billingBy: "Billed on request",
        features: [
          "Dedicated Expert Assistance",
          "Help with selecting the right tax scheme (Regular vs Composition)",
          "PAN & Aadhaar linking support",
          "Clarification handling (if GST officer raises any query)",
          "Priority Processing (2–3 Working Days)",
          "Certificate Explanation & Post-Approval Tips",
        ],
      },
      {
        title: "Premium Plan",
        desc: "Growing businesses, companies, and LLPs",
        price: 1499,
        billingBy: "Monthly Billed on request",
        features: [
          "Customized GST Guidance based on business model",
          "GST Invoice Format & Template",
          "Post-Registration Support for First GST Return",
          "Free Consultation on Input Tax Credit",
          "Optional Add-on Discounts (GST Return Filing, Bookkeeping)",
        ],
      },
    ],
  },
  {
    title: "Pricing Plans for ITR Filing",
    serviceType: ServiceType.ITR,
    data: [
      {
        title: "Basic Plan",
        status: "Trending",
        desc: "For salaried individuals with single Form-16",
        price: 599,
        billingBy: "Billed on request",
        features: [
          "Filing by Tax Expert",
          "Document Check & Filing",
          "Filing Acknowledgment (ITR-V)",
          "Email & WhatsApp Support",
        ],
      },
      {
        title: "Standard Plan",
        status: "Populor",
        desc: "For salaried/freelancers with multiple incomes",
        price: 999,
        billingBy: "Billed on request",
        features: [
          "Includes everything in Basic",
          "Freelance Income & Interest Income",
          "Claim deductions (80C, 80D, etc.)",
          "Faster Processing",
          "Dedicated Filing Manager",
        ],
      },
      {
        title: "Business Plan",
        desc: "Freelancers, consultants, small businesses",
        price: 1499,
        billingBy: "Billed on request",
        features: [
          "Business or Professional Income (ITR-3/4)",
          "Capital Gains (Stocks/Mutual Funds)",
          "Rental Income, Foreign Income",
          "Balance Sheet & Profit/Loss Preparation",
          "Support for Advance Tax / TDS Credits",
          "Help with Notice/Defective Returns",
          "GST + ITR Combo Discounts available",
        ],
      },
      {
        title: "Advanced Plan",
        desc: "Capital gains, multiple incomes, stock trading",
        price: 2499,
        billingBy: "Billed on request",
        features: [
          "GST inclusive",
          "No hidden fees",
          " Discounts for returning clients",
        ],
      },
      {
        title: "NRI Plan",
        desc: "Income earned in India by NRIs",
        price: 2999,
        billingBy: "Billed on request",
        features: [
          "GST inclusive",
          "No hidden fees",
          " Discounts for returning clients",
        ],
      },
      {
        title: "CA Assistance",
        desc: "Personalized consultation + return filing",
        price: 4999,
        billingBy: "Billed on request",
        features: [
          "GST inclusive",
          "No hidden fees",
          " Discounts for returning clients",
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
        title: "Fast & Easy Udyam Registration Online",
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
  {
    id: 3,
    serviceType: ServiceType.GST,
    data: {
      main: {
        title: "Your GST Registration, Our Responsibility",
        subtitle1:
          "Let Our Team Handle Your GST Application – Fast, Compliant & Hassle-Free",
        subtitle2:
          "Start your business the right way. Apply for GST Registration online with our expert assistance. 100% compliance guaranteed!",
        images: getServiceImages(
          ServiceType.GST,
          serviceImageMap[parseServiceTypeLowerCase(ServiceType.GST)]
        ),
      },
      secondary: {
        overview: {
          title: "Service Description – A Quick Overview",
          desc: htmlContent.filter(
            (content) => content.serviceType === ServiceType.GST
          )[0].content,
        },
      },
    },
    pricings: ALL_Pricing.filter(
      (pricing) => pricing.serviceType === ServiceType.GST
    )[0],
    notifications: [],
    steps: ALL_Steps.filter(
      (steps) => steps.serviceType === ServiceType.GST
    )[0],
    faqs: ALL_FAQ.filter((faq) => faq.serviceType === ServiceType.GST)[0],
  },
  {
    id: 4,
    serviceType: ServiceType.ITR,
    data: {
      main: {
        title: "Get Your ITR Filed by Experts",
        subtitle1: "Let us take the hassle out of taxes.",
        subtitle2:
          "Salaried, freelancer, or business owner—we’ve got your tax filing covered, quick and easy.",
        images: getServiceImages(
          ServiceType.ITR,
          serviceImageMap[parseServiceTypeLowerCase(ServiceType.ITR)]
        ),
      },
      secondary: {
        overview: {
          title: "ITR Filing – Overview",
          desc: htmlContent.filter(
            (content) => content.serviceType === ServiceType.ITR
          )[0].content,
        },
      },
    },
    pricings: ALL_Pricing.filter(
      (pricing) => pricing.serviceType === ServiceType.ITR
    )[0],
    notifications: [],
    steps: ALL_Steps.filter(
      (steps) => steps.serviceType === ServiceType.ITR
    )[0],
    faqs: ALL_FAQ.filter((faq) => faq.serviceType === ServiceType.ITR)[0],
  },
];

export const initialUserContact: UserContact = {
  name: "",
  mobile: "",
  location: "",
  businessName: "",
  message: "",
  haveGstNumber: false,
};

export const serviceHome: HomeContent[] = [
  {
    id: 1,
    serviceType: ServiceType.UDYAM,
    title: "Udyam/MSME Registration",
    desc: "Get your business recognized under MSME and unlock benefits like subsidies, tax rebates, and easier bank loans.",
    icon: "udyam-certificate.svg",
  },
  {
    id: 2,
    serviceType: ServiceType.FSSAI,
    title: "FSSAI Registration",
    desc: "Mandatory for all food businesses. Ensure legal compliance and build customer trust with an FSSAI license.",
    icon: "fssai-certificate.svg",
  },
  {
    id: 3,
    serviceType: ServiceType.GST,
    title: "GST Registration",
    desc: "Easily register for GST and start issuing GST-compliant invoices for your business.",
    icon: "gst.svg",
  },
  {
    id: 4,
    serviceType: ServiceType.ITR,
    title: "ITR Filing",
    desc: "File your Income Tax Return accurately and on time with expert support—stress-free and reliable.",
    icon: "tax.svg",
  },
  {
    id: 5,
    serviceType: ServiceType.TRADEMARK,
    title: "Trademark Registration",
    desc: "Secure your brand identity and protect it from misuse with our seamless trademark registration service.",
    icon: "trademark.svg",
  },
  {
    id: 6,
    serviceType: ServiceType.ISO,
    title: "ISO Certification",
    desc: "Boost your credibility with ISO certification—an international standard that validates your business quality.",
    icon: "iso-outline.svg",
  },
  {
    id: 7,
    serviceType: ServiceType.LLP,
    title: "LLP Registration",
    desc: "Start your Limited Liability Partnership easily with our end-to-end LLP registration service.",
    icon: "partnership.svg",
  },
];

export const rightChoiceHome: HomeContent[] = [
  {
    id: 1,
    title: "Fast & Hassle-Free Process",
    desc: "We handle the complex legal paperwork so you don’t have to. Just submit your details and we’ll take care of the rest—quickly and smoothly.",
    icon: "rocket.svg",
  },
  {
    id: 2,
    title: "Expert Guidance at Every Step",
    desc: "Our team of legal and compliance experts ensures your application is accurate, complete, and compliant with all government norms.",
    icon: "guide.svg",
  },
  {
    id: 3,
    title: "Transparent Pricing",
    desc: "No hidden fees, no last-minute charges. You pay what you see—simple and clear pricing for every service.",
    icon: "rupee-circle-solid.svg",
  },
  {
    id: 4,
    title: "Secure & Confidential",
    desc: "Your documents and data are 100% safe with us. We follow strict privacy practices to ensure your information is never compromised.",
    icon: "trust.svg",
  },
  {
    id: 5,
    title: "Trusted by Hundreds of Entrepreneurs",
    desc: "From startups to small business owners, our customers vouch for our reliability and ease of service",
    icon: "guide.svg",
  },
  {
    id: 6,
    title: "End-to-End Support",
    desc: "From form filling to certificate delivery, we stay with you throughout the entire journey—and even after, if needed.",
    icon: "customer-support.svg",
  },
  {
    id: 7,
    title: "User-Friendly Experience",
    desc: "Our platform is built to be intuitive so anyone can apply for licenses without confusion or technical jargon.",
    icon: "friend.svg",
  },
];
