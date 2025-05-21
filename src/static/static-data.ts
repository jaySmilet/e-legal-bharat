import { Notification1, Services, ServiceType } from "../models/models";

export const ServiceData:Services[] = [
    {
        id: 1,
        title: "Udyam Registration",
        description: "Udyam Registration is a government initiative to promote small and medium enterprises (SMEs) in India. It provides various benefits such as access to credit, subsidies, and government schemes.",
        serviceType: ServiceType.UDYAM,
    },
    {
        id:2,
        title: "FSSAI Registration",
        description: "FSSAI Registration is mandatory for food businesses in India. It ensures that food products are safe and meet quality standards. The registration process involves obtaining a license from the Food Safety and Standards Authority of India (FSSAI).",
        serviceType: ServiceType.FSSAI,
    },
    {
        id:3,
        title: "GST Registration",
        description: "GST Registration is required for businesses in India that have a turnover above a certain threshold. It allows businesses to collect and pay Goods and Services Tax (GST) on their sales and purchases.",
        serviceType: ServiceType.GST,},
    {
        id:4,
        title: "ITR Filing",
        description: "ITR Filing is the process of submitting income tax returns to the Income Tax Department in India. It is mandatory for individuals and businesses with taxable income. The filing process involves reporting income, deductions, and tax liabilities.",
        serviceType: ServiceType.ITR,}
]

export const Notifications:Notification1[] = [
    {
        id: 1,
        notificationType: ServiceType.FSSAI,
        notificationMsg: "Attention : Running a Food Business Without a License Can Lead to Rs. 5 Lakh Fine & 6 Months in Jail!",
        isIcon: true,
    },
    {
        id: 2,
        notificationType: ServiceType.FSSAI,
        notificationMsg: "Stay compliant and protect your business—get your food license today!",
    },
]