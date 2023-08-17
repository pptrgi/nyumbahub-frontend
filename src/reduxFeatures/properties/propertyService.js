import axios from "axios";
import { baseURL } from "../../utils/AxiosConfig";
import { headersConfig } from "../../utils/AxiosConfig";

const getAllProperties = async (data = {}) => {
  const response = await axios.get(
    `${baseURL}/property/all-properties/?${
      data?.minPrice ? `price[gte]=${data.minPrice}` : ""
    }&${data?.maxPrice ? `price[lte]=${data.maxPrice}` : ""}&${
      data.propertyType ? `type.typeName=${data.propertyType}` : ""
    }&${data.sort ? `sort=${data.sort}` : ""}`
  );
  if (response.data) {
    return response.data;
  }
};

const getOneProperty = async (propertyId) => {
  const response = await axios.get(`${baseURL}/property/${propertyId}`);
  if (response.data) {
    return response.data;
  }
};

const addPropertyToWishlist = async (propertyId) => {
  const response = await axios.put(
    `${baseURL}/property/wishlist/${propertyId}`,
    headersConfig
  );
  if (response.data) {
    return response.data;
  }
};
const addAReview = async (propertyId, reviewData) => {
  const response = await axios.put(
    `${baseURL}/property/add-review/${propertyId}`,
    reviewData,
    headersConfig
  );
  if (response.data) {
    return response.data;
  }
};

export const propertyService = {
  getAllProperties,
  getOneProperty,
  addPropertyToWishlist,
  addAReview,
};
