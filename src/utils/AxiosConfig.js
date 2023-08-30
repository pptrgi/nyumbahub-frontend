// create the base URL for the API requests
// export const baseURL = "http://localhost:3535/api";
export const baseURL = "https://nyumbahub.netlify.app/.netlify/functions/api";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
console.log("headers", token);

export const headersConfig = {
  headers: {
    Authorization: `Bearer ${token !== null ? token : ""}`,
    Accept: "Application/json",
  },
};
