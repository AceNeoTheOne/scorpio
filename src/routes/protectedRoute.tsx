import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "./helpers";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  let cookiePresent = true;
  const token = getCookie("user");
  if (typeof token === "undefined") cookiePresent = false;
  if (!cookiePresent) {
    // Redirect to login, but save the current location to return after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
