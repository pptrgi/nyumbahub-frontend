import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const OpenRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedTokenTimestamp = localStorage.getItem("tokenTimestamp");
  console.log("stored token", storedToken);

  const timeRightNow = new Date().getTime();
  const tokenExpiryTime = 30 * 60 * 1000;

  if (timeRightNow - parseInt(storedTokenTimestamp) >= tokenExpiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
  }

  // problem with toast, rectify
  return storedToken === null
    ? children
    : toast.info("You're already signed in / registered") && (
        <Navigate to="/" replace={true} />
      );
};
