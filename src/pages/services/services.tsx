import { Outlet, useLocation } from "react-router-dom";
import { RoutePath } from "../../models/models";

const Services = () => {
  const location = useLocation();
  return location.pathname === `/${RoutePath.SERVICES}` ? (
    <div>Services</div>
  ) : (
    <Outlet />
  );
};

export default Services;
