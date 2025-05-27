import "./pricing-card.scss";
import type { PricingCard, PricingCardItem } from "../../models/models";

interface PricingCardProps {
  pricingCardItem: PricingCardItem;
}

const PricingCard = ({ pricingCardItem }: PricingCardProps) => {
  return (
    <div className="pricing-card card h-100 d-flex flex-column gap-2 shadow-lg bg-body-tertiary rounded">
      <div className="card-top d-flex flex-column gap-2">
        <div className="card-top-icon wh28 d-flex justify-content-center align-items-center p-1 rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 21 21"
          >
            <g fill="none" fillRule="evenodd">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 6.5h8m-8 3.998h5m-5 4.002h8"
              />
              <path
                fill="currentColor"
                d="M4.499 7.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1z"
              />
            </g>
          </svg>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="h4 m-0 fw-semibold">{pricingCardItem.title}</span>
          {pricingCardItem.status && (
            <div className="trends d-flex align-items-center gap-1 py-1 px-2 bg-warning bg-opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 128 128"
              >
                <radialGradient
                  id="notoFire0"
                  cx="68.884"
                  cy="124.296"
                  r="70.587"
                  gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".314" stopColor="#FF9800" />
                  <stop offset=".662" stopColor="#FF6D00" />
                  <stop offset=".972" stopColor="#F44336" />
                </radialGradient>
                <path
                  fill="url(#notoFire0)"
                  d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"
                />
                <radialGradient
                  id="notoFire1"
                  cx="64.921"
                  cy="54.062"
                  r="73.86"
                  gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".214" stopColor="#FFF176" />
                  <stop offset=".328" stopColor="#FFF27D" />
                  <stop offset=".487" stopColor="#FFF48F" />
                  <stop offset=".672" stopColor="#FFF7AD" />
                  <stop offset=".793" stopColor="#FFF9C4" />
                  <stop offset=".822" stopColor="#FFF8BD" stopOpacity=".804" />
                  <stop offset=".863" stopColor="#FFF6AB" stopOpacity=".529" />
                  <stop offset=".91" stopColor="#FFF38D" stopOpacity=".209" />
                  <stop offset=".941" stopColor="#FFF176" stopOpacity="0" />
                </radialGradient>
                <path
                  fill="url(#notoFire1)"
                  d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"
                />
              </svg>
              <small className="fw-semibold">{pricingCardItem.status}</small>
            </div>
          )}
        </div>
        <small className="price-info fw-semibold lh-sm">
          {pricingCardItem.desc}
        </small>

        <div className="price-div d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-1">
            <span className="price h3 m-0 fw-bold">
              ₹ {pricingCardItem.price}{" "}
            </span>
            <span className="price-info fs-6 lh-sm">/per year</span>
          </div>
          <small className="price-info fw-semibold lh-sm text-muted">
            {pricingCardItem.billingBy}
          </small>
        </div>
      </div>
      <div className="line"></div>
      <div className="card-bottom d-flex flex-column gap-3">
        <small className="price-info fw-semibold lh-sm text-muted">
          What's included
        </small>
        <div className="features d-flex flex-column gap-2">
          {pricingCardItem.features.map((feature) => (
            <small
              key={feature}
              className="d-flex align-items-start gap-1 price-info fw-semibold lh-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="text-success"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </small>
          ))}
        </div>
      </div>
      <div className="d-grid col-12 mx-auto mt-auto">
        <button type="submit" className="btn btn-outline-dark">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
