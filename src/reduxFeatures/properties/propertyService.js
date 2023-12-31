import axios from "axios";

import { baseURL, assignHeaders } from "../../utils/axiosSetup";

// The server couples status code with json body for all responses(successful and unsuccessful requests).
// The returned status code defines if the request was successful or not. Thus createAsyncThunk() will accept even unsuccessful request's response data as payload without its knowledge
// To prevent this, we check the response status code first, if in 200, we return the response data as the action payload
// What isn't achieved yet is, if the status isn't within 200, createAsyncThunk() needs to have the thrown error as action's error. ATM it is rejecting the promise and showing "rejected" as the action.error. But the thrown error message needs to be shown
// There will be changes upon finding solution

const getAllProperties = async (data = {}) => {
  const response = await axios.get(
    `${baseURL}/property/all-properties/?${
      data?.minPrice ? `price[gte]=${data.minPrice}` : ""
    }&${data?.maxPrice ? `price[lte]=${data.maxPrice}` : ""}&${
      data.propertyType ? `type.typeName=${data.propertyType}` : ""
    }&${data.sort ? `sort=${data.sort}` : ""}`
  );
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const getOneProperty = async (propertyId) => {
  const response = await axios.get(`${baseURL}/property/${propertyId}`);
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const addPropertyToWishlist = async (propertyId) => {
  const response = await axios.put(
    `${baseURL}/property/wishlist/${propertyId}`,
    null,
    assignHeaders()
  );
  const responseStatusString = String(response.status);

  if (responseStatusString.charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const addAReview = async (reviewData) => {
  const response = await axios.put(
    `${baseURL}/property/add-review/${reviewData?.propertyId}`,
    reviewData.reviewInfo,
    assignHeaders()
  );
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

export const propertyService = {
  getAllProperties,
  getOneProperty,
  addPropertyToWishlist,
  addAReview,
};
