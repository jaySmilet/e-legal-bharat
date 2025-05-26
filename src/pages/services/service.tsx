import { useEffect, useState } from "react";
import Marquee from "../../components/Marquee";
import { useParams } from "react-router-dom";
import { Notification1, ServiceType } from "../../models/models";
import {
  fssaiFAQ,
  fssaiPricing,
  fssaiSteps,
  Notifications,
} from "../../static/static-data";
import { parseServiceTypeUpperCase } from "../../utils/utils";
import alert from "../../assets/icons/alert.gif";
import Contact from "../contact";
import fsm from "../../assets/fssai-fsm.png";
import fssai from "../../assets/icons/fssai-logo.webp";
import { fssaiRegistrationInfo } from "../../static/fssaiRegistrationInfo";
import Steps from "../../components/Steps/steps";
import Accordion from "../../components/Accordions/accordion";
import PricingCard from "../../components/PricingCards/pricing-card";

const Service = () => {
  const params = useParams();
  const { serviceType } = params;
  const getNotifications = (serviceType: string) => {
    const notifications: Notification1[] = Notifications.filter(
      (notification) =>
        notification.notificationType === parseServiceTypeUpperCase(serviceType)
    );
    return notifications;
  };

  const [notifications, setNotifications] = useState<Notification1[]>([]);
  useEffect(() => {
    setNotifications(getNotifications(serviceType as string));
  }, []);
  return (
    <div className="service">
      {notifications.length > 0 ? (
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
      ) : (
        ""
      )}
      <div className="row py-3 px-5 no-copy">
        <div className="col-md-6 px-md-5 py-md-3 py-4 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column gap-1">
              <h2 className="fs-1 fw-bold">Your FSSAI License, Faster</h2>
              <h6 className="fs-5 fw-semibold">
                Need your FSSAI Registration Certificate?
              </h6>
            </div>
            <div className="line"></div>
            <span className="fw-semibold">
              We make it super easy to apply online through the FOSCOS portal.
              Just reach out to us, and we’ll help you get it done fast and
              hassle-free!
            </span>
            <div className="row d-flex justify-content-center align-items-center">
              <img
                src={fsm}
                className="img-fluid col-md-6"
                style={{ width: "300px" }}
                alt="..."
              />
              <img
                src={fssai}
                className="img-fluid col-md-6"
                style={{ width: "200px" }}
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-md-5 py-md-3 py-4">
          <div className="card shadow-lg bg-body-tertiary rounded">
            <Contact serviceType={ServiceType.FSSAI} />
          </div>
        </div>
      </div>

      <div className="pricing-plans row py-3 px-5 no-copy">
        <div className="fs-3 fw-bold text-center mb-1">
          Trusted FSSAI Licensing, Straightforward Pricing
        </div>
        {fssaiPricing.map((fsPrice) => (
          <div className="col-md-4 d-flex align-items-stretch px-md-4 my-md-4 my-3">
            <PricingCard pricingCard={fsPrice} />
          </div>
        ))}
      </div>

      <div className="row py-3 px-5 no-copy">
        <div className="col-md-12 px-md-5 my-3">
          <div className="d-flex flex-column gap-3">
            <h6 className="fs-4 fw-bold">{fssaiRegistrationInfo.title}</h6>
            <div className="line"></div>
            <span className="fs-6 fw-semibold">
              {fssaiRegistrationInfo.introduction}
            </span>
            <span
              className="fs-6 fw-semibold"
              dangerouslySetInnerHTML={{
                __html: fssaiRegistrationInfo.mandatoryRegistration.description,
              }}
            />
          </div>
          <div className="d-flex flex-column gap-3 my-5">
            <div className="d-flex flex-column gap-2">
              <h6 className="fs-4 fw-bold">
                {fssaiRegistrationInfo.whatIsFSSAIRegistration.heading}
              </h6>
              <span className="fs-6 fw-semibold">
                {fssaiRegistrationInfo.whatIsFSSAIRegistration.description}
              </span>
              <ul className="fs-6 fw-semibold">
                {fssaiRegistrationInfo.whatIsFSSAIRegistration.eligibleBusinesses.map(
                  (business, index) => (
                    <li key={index}>{business}</li>
                  )
                )}
              </ul>
            </div>

            <div className="d-flex flex-column gap-2">
              <h6 className="fs-4 fw-bold">
                {fssaiRegistrationInfo.keyPoints.heading}
              </h6>
              <ul className="fs-6 fw-semibold">
                {fssaiRegistrationInfo.keyPoints.points.map((point, index) => (
                  <li key={index}>
                    <span className="fw-bold">{point.title}:</span>{" "}
                    {point.detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="d-flex flex-column gap-2">
              <h6 className="fs-4 fw-bold">
                {fssaiRegistrationInfo.importance.heading}
              </h6>
              <span className="fs-6 fw-semibold">
                {fssaiRegistrationInfo.importance.description}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-3 px-5 no-copy">
        {" "}
        <div className="col-md-12 px-md-5 px-3">
          <h6 className="fs-4 fw-bold">Steps to Get FSSAI Registration</h6>
          <div className="line"></div>
          <span className="fs-6 fw-semibold">
            Follow these simple steps to get your FSSAI registration done
            quickly and easily.
          </span>
        </div>
        {fssaiSteps.map((step) => (
          <div className="col-md-6">
            <Steps
              key={step.stepIndex}
              stepIndex={step.stepIndex}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>

      <div className="row py-3 px-5 no-copy">
        <div className="col-md-12 px-md-5 p-3">
          <h6 className="fs-4 fw-bold">Frequently Asked Questions (FAQs)</h6>
          <div className="line"></div>
          <span className="fs-6 fw-semibold">
            Here are some common questions about FSSAI registration:
          </span>
        </div>
        <div className="col-md-12 px-md-5 p-3">
          <Accordion faq={fssaiFAQ} />
        </div>
      </div>
    </div>
  );
};

export default Service;
