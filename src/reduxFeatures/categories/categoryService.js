import axios from "axios";
import { baseURL } from "../../utils/AxiosConfig";

const getOneCategory = async (categoryId) => {
  const response = await axios.get(`${baseURL}/category/${categoryId}`);
  if (response.data) {
    return response.data;
  }
};

const getFeaturedCategory = async () => {
  // const response = await axios.get(
  //   `${baseURL}/category/64b23f843567c004de3bf4c9`
  // );
  const response = await axios.get(
    `${baseURL}/category/64d36c39632663f6a74fd5f8`
  );
  if (response.data) {
    return response.data;
  }
};
const getNewListingCategory = async () => {
  // const response = await axios.get(
  //   `${baseURL}/category/64b23f8f3567c004de3bf4cc`
  // );
  const response = await axios.get(
    `${baseURL}/category/64d4a9e82ae9a7c96dba268c`
  );
  if (response.data) {
    return response.data;
  }
};

export const categoryService = {
  getOneCategory,
  getFeaturedCategory,
  getNewListingCategory,
};
