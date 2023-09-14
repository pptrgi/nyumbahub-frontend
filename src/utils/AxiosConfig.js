// create the base URL for the API requests
export const baseURL = "https://nyumbahub.netlify.app/.netlify/functions/api";

// Without a function, earlier you'd need to refresh a page(any) for the token to be accessed from storage
// Failure to refresh page you'd make an API request with the access token missing
// As a result, for better user experience and prevent errors returned by API... a function call to assign headers
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
