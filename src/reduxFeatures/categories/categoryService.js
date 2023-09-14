import axios from "axios";
import { baseURL } from "../../utils/AxiosConfig";

// The server couples status code with json body for all responses(successful and unsuccessful requests).
// The returned status code defines if the request was successful or not. Thus createAsyncThunk() will accept even unsuccessful request's response data as payload without its knowledge
// To prevent this, we check the response status code first, if in 200, we return the response data as the action payload
// What isn't achieved yet is, if the status isn't within 200, createAsyncThunk() needs to have the thrown error as action's error. ATM it is rejecting the promise and showing "rejected" as the action.error. But the thrown error message needs to be shown
// There will be changes upon finding solution

const getOneCategory = async (categoryId) => {
  const response = await axios.get(`${baseURL}/category/${categoryId}`);

  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const getFeaturedCategory = async () => {
  const response = await axios.get(
    `${baseURL}/category/ 64b23f843567c004de3bf4c9`
  );

  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const getNewListingCategory = async () => {
  const response = await axios.get(
    `${baseURL}/category/64b23f8f3567c004de3bf4cc`
  );

  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

export const categoryService = {
  getOneCategory,
  getFeaturedCategory,
  getNewListingCategory,
};
