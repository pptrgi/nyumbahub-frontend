// create the base URL for the API requests
export const baseURL = "https://nyumbahub.netlify.app/.netlify/functions/api";
// export const baseURL = "http://localhost:3535/api";

// a function to get token from storage and assign headers
export const assignHeaders = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  return {
    headers: {
      Authorization: `Bearer ${token !== null ? token : ""}`,
      Accept: "Application/json",
    },
  };
};
