import { useEffect, useState } from "react";
import Marquee from "../../components/Marquee";
import { useParams } from "react-router-dom";
import { Services } from "../../models/models";
import { ServiceData } from "../../static/static-data";
import { parseServiceTypeUpperCase } from "../../utils/utils";
import alert from "../../assets/icons/alert.gif";
import Contact from "../contact";
import Steps from "../../components/Steps/steps";
import Accordion from "../../components/Accordions/accordion";
import PricingCard from "../../components/PricingCards/pricing-card";
import Spinners from "../../components/Spinners/spinners";
import ImageViewer from "../../components/ImageViewer/ImageViewer";

const Service = () => {
  const params = useParams();
  const { serviceType } = params;
  const [serviceData, setServiceData] = useState<Services[]>([]);

  const getServiceData = (serviceType: string) => {
    const serviceData: Services[] = ServiceData.filter(
      (sData) => sData.serviceType === parseServiceTypeUpperCase(serviceType)
    );
    return serviceData;
  };

  useEffect(() => {
    const newData = getServiceData(serviceType as string);
    setServiceData(newData);
  }, [serviceType]);

  console.log(serviceData);

  if (!serviceData[0]) {
    return (
      <div className="d-flex justify-content-center py-5">
        <Spinners />
      </div>
    );
  }

  const {
    notifications,
    data,
    serviceType: serviceTypeData,
    pricings,
    steps,
    faqs,
  } = serviceData[0];

  return (
    <div className="service no-copy">
      {Array.isArray(notifications) && notifications.length > 0 && (
        <div className="d-flex justify-content-center align-items-center bg-yellow-400 text-dark-emphasis p-1">
          <Marquee
            children={notifications.map((notification) => (
              <span key={notification.id} className="fs-normal fw-medium me-5">
                {notification.isIcon && (
                  <img
                    src={alert}
                    className="me-2"
                    style={{ height: "24px" }}
                    alt="..."
                  />
                )}{" "}
                {notification.notificationMsg}
              </span>
            ))}
          />
        </div>
      )}
      <div className="row p-4">
        <div className="col-md-6 px-md-5 py-md-3 py-4 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-1">
              <h2 className="fs-1 fw-bold">{data.main.title}</h2>
              <h6 className="fs-5 fw-semibold">{data.main.subtitle1}</h6>
            </div>
            <div className="line"></div>
            <span className="fw-semibold">{data.main.subtitle2}</span>
            <div className="row d-flex justify-content-center align-items-center">
              <img
                src={data.main.images[0].url}
                className="img-fluid col-md-6"
                style={{ width: "300px" }}
                alt={data.main.images[0].name}
                onError={(e) => {
                  e.currentTarget.src = `${data.main.images[0].fallBackUrl}`;
                }}
              />
              <img
                src={data.main.images[1].url}
                className="img-fluid col-md-6"
                style={{ width: "200px" }}
                alt={data.main.images[1].name}
                onError={(e) => {
                  e.currentTarget.src = `${data.main.images[0].fallBackUrl}`;
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-md-5 py-md-3 py-4">
          <div className="card shadow-lg bg-body-tertiary rounded">
            <Contact serviceType={serviceTypeData} />
          </div>
        </div>
      </div>

      <div className="pricing-plans bg-gray-200 row px-md-5 py-5 px-4">
        <div className="fs-3 fw-bold text-center mb-4">{pricings.title}</div>
        {pricings.data.map((pC) => (
          <div
            key={pC.title}
            className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch px-2 my-3"
          >
            <PricingCard pricingCardItem={pC} />
          </div>
        ))}
      </div>

      <div className="row p-4 pt-5">
        <div className="col-md-12 px-md-5">
          <div className="d-flex flex-column gap-2">
            <h6 className="fs-4 fw-bold mb-0">
              {data.secondary.overview.title}
            </h6>
            <div className="line"></div>
            <div
              className="fs-6 fw-semibold"
              dangerouslySetInnerHTML={{
                __html: data.secondary.overview.desc,
              }}
            />
          </div>
        </div>
      </div>

      <div className="row py-3 px-4">
        {" "}
        <div className="col-md-12 px-md-5 px-3">
          <h6 className="fs-4 fw-bold">{steps.title}</h6>
          <div className="line"></div>
          <span className="fs-6 fw-semibold">{steps.subtitle}</span>
        </div>
        {steps.data.map((step) => (
          <div key={step.stepIndex} className="col-md-6 px-md-0 px-4">
            <Steps stepData={step} />
          </div>
        ))}
      </div>

      <div className="d-flex flex-column gap-4 align-items-center justify-content-center bg-gray-200 p-4">
        <span className="fs-4 fw-semibold">Sample Certificate</span>
        <ImageViewer
          src={data.main.images[2].url}
          alt={data.main.images[2].name}
          fallback={data.main.images[2].fallBackUrl}
        />
      </div>

      <div className="row p-4">
        <div className="col-md-12 px-md-5 p-3">
          <h6 className="fs-4 fw-bold">{faqs.title}</h6>
          <div className="line"></div>
          <span className="fs-6 fw-semibold">{faqs.subtitle}</span>
        </div>
        <div className="col-md-12 px-md-5 p-3">
          <Accordion faq={faqs.data} />
        </div>
      </div>
    </div>
  );
};

export default Service;
