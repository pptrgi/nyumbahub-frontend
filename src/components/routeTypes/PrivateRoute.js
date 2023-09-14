import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// Render children routes if there's an access token, that is not expired(if expired delete it)
export const PrivateRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedTokenTimestamp = localStorage.getItem("tokenTimestamp");

  const timeRightNow = new Date().getTime();
  const tokenExpiryTime = 2 * 60 * 60 * 1000; // 2 hours

  if (timeRightNow - storedTokenTimestamp >= tokenExpiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
    localStorage.removeItem("persist:root");
  }

  return storedToken !== null
    ? children
    : toast.info("Please sign in to your account first") && (
        <Navigate to="/signin" replace={true} />
      );
};
