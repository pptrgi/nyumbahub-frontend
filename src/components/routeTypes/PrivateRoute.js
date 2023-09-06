import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PrivateRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedTokenTimestamp = localStorage.getItem("tokenTimestamp");
  console.log("stored token", storedToken);

  const timeRightNow = new Date().getTime();
  const tokenExpiryTime = 30 * 60 * 1000;

  if (timeRightNow - storedTokenTimestamp >= tokenExpiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
  }

  // problem with toast, rectify
  return storedToken !== null
    ? children
    : toast.info("Please sign in to your account first") && (
        <Navigate to="/signin" replace={true} />
      );
};
