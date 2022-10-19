import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./../userContext/UserContext";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
