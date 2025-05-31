import { useNavigate } from "react-router-dom";
import { ServiceType } from "../models/models";
import { parseServiceTypeLowerCase } from "../utils/utils";
import { rightChoiceHome, serviceHome } from "../static/static-data";
import { BASE_IMAGE_PATH } from "../constants";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (serviceType: ServiceType) => {
    navigate(`/services/${parseServiceTypeLowerCase(serviceType)}`);
  };
  return (
    <div className="home d-flex flex-column">
      <div className="top-info position-relative">
        <div className="overlay"></div>
        <div className="text-content h-100 d-flex align-items-center p-md-5 p-4">
          <div className="d-flex flex-column gap-md-4 gap-5">
            <div className="d-flex flex-column gap-2">
              <span className="text-light fs-1 fw-semibold">
                Welcome to E Legal Bharat
              </span>
              <span className="text-light fs-4 fw-normal mt-2">
                Registration to Compliance We’ve Got You Covered!
              </span>
            </div>
            <div className="d-flex flex-column flex-md-row gap-md-5 gap-2">
              <div className="d-flex flex-column gap-2">
                <span
                  className="d-flex align-items-center gap-2 text-light cursor-pointer hover-underline"
                  onClick={() => handleClick(ServiceType.FSSAI)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 4 0V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-3 3v11M9 7h4m-4 4h4"
                    />
                  </svg>
                  FSSAI Registration
                </span>
                <span
                  className="d-flex align-items-center gap-2 text-light  cursor-pointer hover-underline"
                  onClick={() => handleClick(ServiceType.UDYAM)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M10 6h12v2H10zm0 4h12v2H10zm0 14h6v2h-6zm0-10h6v2h-6z"
                    />
                    <path
                      fill="currentColor"
                      d="M24 30H8a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v24a2.002 2.002 0 0 1-2 2ZM8 4v24h16V4Z"
                    />
                  </svg>
                  Udyam Liscence
                </span>
              </div>
              <div className="d-flex flex-column gap-2">
                <span
                  className="d-flex align-items-center gap-2 text-light cursor-pointer hover-underline"
                  onClick={() => handleClick(ServiceType.GST)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      color="currentColor"
                    >
                      <path d="M2 8.57c0-1.197.482-1.93 1.48-2.486l4.11-2.287C9.743 2.6 10.82 2 12 2s2.257.6 4.41 1.797l4.11 2.287C21.517 6.64 22 7.373 22 8.57c0 .324 0 .487-.035.62c-.186.7-.821.811-1.434.811H3.469c-.613 0-1.247-.11-1.434-.811C2 9.056 2 8.893 2 8.569M4 10v8.5M8 10v8.5m3 0H5a3 3 0 0 0-3 3a.5.5 0 0 0 .5.5H11m10.5-7.5l-7 7" />
                      <circle cx="15.25" cy="15.25" r=".75" />
                      <circle cx="20.75" cy="20.75" r=".75" />
                    </g>
                  </svg>
                  GST Registration
                </span>
                <span
                  className="d-flex align-items-center gap-2 text-light cursor-pointer hover-underline"
                  onClick={() => handleClick(ServiceType.ITR)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="M1792 256v1792H256V256h512q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100h512zM640 384v128h768V384h-256V256q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128H640zm1024 0h-128v256H512V384H384v1536h1280V384zm-405 335q42 0 78 15t64 42t42 63t16 78q0 39-15 76t-43 65l-526 531l-358 68l75-351l526-530q28-28 65-42t76-15zm51 249q21-23 21-51q0-31-20-50t-52-20q-14 0-27 4t-23 15l-499 503l-27 126l129-25l498-502z"
                    />
                  </svg>
                  ITR
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-man"></div>
      </div>
      {/* <Carousels /> */}

      <div className="service-grid-section p-md-5 p-4">
        <span className="fs-3 fw-bold bb-red-4">Our Services</span>
        <div className="service-grid mt-5">
          {serviceHome.map((sH) => (
            <div
              key={sH.id}
              className="home-service-card card shadow p-4 w-100 h-100 d-flex flex-column"
            >
              <div className="d-flex flex-column gap-4 flex-grow-1">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={`${BASE_IMAGE_PATH}icons/${sH.icon}`}
                    alt={sH.title}
                    width={32}
                    height={32}
                  />
                  <span className="fs-5 fw-bold">{sH.title}</span>
                </div>
                <span className="fs-normal">{sH.desc}</span>
                <div className="d-grid gap-2 col-6 mx-auto mt-auto">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() =>
                      sH.serviceType && handleClick(sH.serviceType)
                    }
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="service-grid-section bg-gray-200 p-md-5 p-4">
        <span className="fs-3 fw-bold bb-red-4">
          Why We're the Right Choice
        </span>
        <div className="service-grid mt-5">
          {rightChoiceHome.map((rcH) => (
            <div
              key={rcH.id}
              className="home-service-card card-rc card shadow p-4 w-100  h-100 d-flex flex-column cursor-pointer"
            >
              <div className="d-flex flex-column gap-4 flex-grow-1">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={`${BASE_IMAGE_PATH}icons/${rcH.icon}`}
                    alt={rcH.title}
                    width={32}
                    height={32}
                  />
                  <span className="title-rc fs-5 fw-bold">{rcH.title}</span>
                </div>
                <span className="fs-normal">{rcH.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
