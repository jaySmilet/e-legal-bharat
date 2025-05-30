import { Link } from "react-router-dom";

interface NotFoundProps {
  text?: string;
}

const NotFound = ({
  text = `Oops! The page you’re looking for doesn’t exist.`,
}: NotFoundProps) => {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center my-5">
      <h1>{text ? "Sorry!" : "404 - Page Not Found"}</h1>
      <p className="fs-5 fw-semibold">{text}</p>
      <Link
        to="/"
        className="d-flex align-items-center gap-2 btn btn-dark px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <mask id="ipSBack0">
            <path
              fill="#fff"
              fillRule="evenodd"
              stroke="#fff"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
              clipRule="evenodd"
            />
          </mask>
          <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBack0)" />
        </svg>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
