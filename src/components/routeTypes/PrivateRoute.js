import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PrivateRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedTokenTimestamp = localStorage.getItem("tokenTimestamp");
  console.log("stored token", storedToken);

  const timeRightNow = new Date().getTime();
  const tokenExpiryTime = 30 * 60 * 1000; //30 minutes

  if (timeRightNow - storedTokenTimestamp >= tokenExpiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
  }

  return storedToken !== null ? (
    children
  ) : (
    <Navigate to="/signin" replace={true} />
  );
};
