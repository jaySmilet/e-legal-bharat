const Connect = () => {
  return (
    <div className="connnect-section px-md-5 py-2 bg-white d-flex align-items-center justify-content-around justify-content-md-start gap-md-5 text-light">
      <small className="d-flex align-items-center gap-1 text-secondary-emphasis">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5c-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7c.4.4 3.9 4 7 3.9c1.8 0 2.7-.2 4.9-2.6c1-1.1-2.5-3.3-3.6-3.4z"
          />
        </svg>
        <a
          href="tel:+917408465660"
          className="text-secondary-emphasis text-decoration-none fw-semibold"
        >
          +91-7408465660
        </a>
      </small>
      <small className="d-flex align-items-center gap-1 text-secondary-emphasis">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 42 42"
        >
          <path
            fill="currentColor"
            d="M40.5 31.5v-18S22.3 26.2 20.53 26.859C18.79 26.23.5 13.5.5 13.5v18c0 2.5.53 3 3 3h34c2.529 0 3-.439 3-3zm-.029-21.529c0-1.821-.531-2.471-2.971-2.471h-34c-2.51 0-3 .78-3 2.6l.03.28s18.069 12.44 20 13.12c2.04-.79 19.97-13.4 19.97-13.4l-.029-.129z"
          />
        </svg>
        <a
          href="mailto:elegalbharat@gmail.com"
          className="text-secondary-emphasis text-decoration-none fw-semibold"
        >
          elegalbharat@gmail.com
        </a>
      </small>
    </div>
  );
};

export default Connect;
