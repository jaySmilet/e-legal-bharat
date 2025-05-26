const About = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">About Us</h1>

      <p className="lead text-center mb-5">
        <strong>e-Legal Bharat</strong> is your one-stop platform for all
        business registration and compliance services in India — fast,
        paperless, and professional.
      </p>

      {/* Services */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="d-flex">
            <div className="me-3">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-shield-check text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M5.072 0c-.355 0-.705.037-1.043.106A1.982 1.982 0 0 0 2.637.637C1.497 1.778.956 3.312.956 5.072c0 2.573 1.457 5.036 3.703 6.524A14.7 14.7 0 0 0 8 13.728a14.7 14.7 0 0 0 3.34-2.132c2.246-1.488 3.703-3.951 3.703-6.524 0-1.76-.54-3.294-1.681-4.435a1.982 1.982 0 0 0-1.392-.531A14.6 14.6 0 0 0 8 0a14.6 14.6 0 0 0-2.928 0z" />
                <path d="M10.854 5.646a.5.5 0 0 0-.708-.708L7.5 7.586 6.354 6.44a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
              </svg>
            </div>
            <div>
              <h5 className="fw-bold">FSSAI Registration</h5>
              <p className="mb-0">
                Get your food license quickly and hassle-free, fully compliant
                with FSSAI norms.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex">
            <div className="me-3">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-building text-success"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 0a.5.5 0 0 0-.5.5v14H3.5a.5.5 0 0 0 0 1H12.5a.5.5 0 0 0 0-1H10v-4h1a1 1 0 0 0 1-1V2.5A1.5 1.5 0 0 0 10.5 1H6.707A1 1 0 0 0 6.5 0zM5 1a.5.5 0 0 1 .5-.5H10.5A.5.5 0 0 1 11 1V10a.5.5 0 0 1-.5.5H10v4H6V1H5z" />
              </svg>
            </div>
            <div>
              <h5 className="fw-bold">Udyam Registration</h5>
              <p className="mb-0">
                Official MSME certificate for entrepreneurs & startups under the
                Udyam scheme.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex">
            <div className="me-3">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cash-coin text-warning"
                viewBox="0 0 16 16"
              >
                <path d="M11 4a2 2 0 0 0-4 0H3.5a.5.5 0 0 0 0 1H7a2 2 0 0 0 4 0h3.5a.5.5 0 0 0 0-1H11zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8 7a7 7 0 1 0 0-14A7 7 0 0 0 8 15z" />
              </svg>
            </div>
            <div>
              <h5 className="fw-bold">GST Filing</h5>
              <p className="mb-0">
                From registration to timely return filing, we make GST simple
                for your business.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex">
            <div className="me-3">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-file-earmark-text text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6.5L14 4.5zm-3.5.5a.5.5 0 0 1-.5-.5V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5h-2.5z" />
                <path d="M5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <div>
              <h5 className="fw-bold">ITR Filing</h5>
              <p className="mb-0">
                Get your Income Tax Returns filed accurately and on time by
                professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-center fw-bold mb-4">Why Choose e-Legal Bharat?</h2>
      <ul className="list-group list-group-flush mb-5">
        <li className="list-group-item">
          ✅ Trusted by Individuals & Small Businesses
        </li>
        <li className="list-group-item">✅ Quick Turnaround Time</li>
        <li className="list-group-item">✅ Secure Online Process</li>
        <li className="list-group-item">✅ Transparent & Affordable Pricing</li>
      </ul>

      <p className="text-center fs-5">
        Let us handle the compliance, while you focus on growing your business!
      </p>
    </div>
  );
};

export default About;
