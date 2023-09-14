import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// Render children routes if there's no access token found
// Delete expired token
export const OpenRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedTokenTimestamp = localStorage.getItem("tokenTimestamp");

  const timeRightNow = new Date().getTime();
  const tokenExpiryTime = 2 * 60 * 60 * 1000; // 2 hours

  if (timeRightNow - parseInt(storedTokenTimestamp) >= tokenExpiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
    localStorage.removeItem("persist:root");
  }

  return storedToken === null
    ? children
    : toast.info("You're already signed in / registered") && (
        <Navigate to="/" replace={true} />
      );
};
