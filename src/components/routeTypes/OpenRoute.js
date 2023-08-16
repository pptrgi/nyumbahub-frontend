import { Navigate } from "react-router-dom";

export const OpenRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const storedTokenTimestamp = localStorage.getItem("tokenTimestamp");
  console.log("stored token", storedToken);

  const timeRightNow = new Date().getTime();
  const tokenExpiryTime = 30 * 60 * 1000; // 15 minutes

  if (timeRightNow - parseInt(storedTokenTimestamp) >= tokenExpiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
  }

  return storedToken === null ? children : <Navigate to="/" replace={true} />;
};
