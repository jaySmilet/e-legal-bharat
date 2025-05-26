import { Outlet, useLocation } from "react-router-dom";
import { RoutePath } from "../../models/models";

const Services = () => {
  const location = useLocation();
  return location.pathname === `/${RoutePath.SERVICES}` ? (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted">
          Helping individuals and businesses stay compliant with government
          regulations
        </p>
      </div>

      <div className="row g-4">
        {/* Active Services */}
        {[
          {
            title: "Udyam Registration",
            desc: "Register your business as MSME and unlock financial benefits.",
            svg: (
              <svg
                width="48"
                height="48"
                fill="currentColor"
                className="text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M0 1v14h16V1H0zm15 13H1V2h14v12z" />
                <path d="M3 4h10v1H3V4zm0 2h10v1H3V6zm0 2h6v1H3V8z" />
              </svg>
            ),
          },
          {
            title: "FSSAI Registration",
            desc: "Obtain your food business license quickly and legally.",
            svg: (
              <svg
                width="48"
                height="48"
                fill="currentColor"
                className="text-success"
                viewBox="0 0 16 16"
              >
                <path d="M2 2h12v12H2V2zm1 1v10h10V3H3z" />
                <path d="M4 6h8v1H4V6zm0 2h6v1H4V8z" />
              </svg>
            ),
          },
          {
            title: "GST Registration",
            desc: "Get registered under GST and ensure tax compliance.",
            svg: (
              <svg
                width="48"
                height="48"
                fill="currentColor"
                className="text-warning"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3 9H5V7h6v2z" />
              </svg>
            ),
          },
          {
            title: "ITR Filing",
            desc: "File your Income Tax Returns accurately and on time.",
            svg: (
              <svg
                width="48"
                height="48"
                fill="currentColor"
                className="text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M4 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" />
                <path d="M5 3h6v1H5V3zm0 2h6v1H5V5zm0 2h6v1H5V7z" />
              </svg>
            ),
          },
        ].map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body">
                {service.svg}
                <h5 className="card-title mt-3">{service.title}</h5>
                <p className="card-text text-muted">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Coming Soon */}
        <div className="col-12 mt-5">
          <h4 className="fw-semibold mb-3 text-center">Coming Soon</h4>
        </div>

        {[
          "MSME Registration",
          "Trademark Registration",
          "ISO Certification",
          "IEC Registration",
          "TAN Registration",
          "DIN Registration",
          "LLP Registration",
        ].map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 bg-light text-center border-0">
              <div className="card-body">
                {/* Placeholder SVG */}
                <svg width="48" height="48" fill="gray" viewBox="0 0 16 16">
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="gray"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M5 8h6" stroke="gray" strokeWidth="2" />
                  <path d="M8 5v6" stroke="gray" strokeWidth="2" />
                </svg>
                <h6 className="mt-3">{service}</h6>
                <span className="badge bg-secondary mt-2">Coming Soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  ) : (
    <Outlet />
  );
};

export default Services;
