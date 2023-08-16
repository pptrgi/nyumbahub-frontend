import axios from "axios";
import { baseURL } from "../../utils/AxiosConfig";
import { headersConfig } from "../../utils/AxiosConfig";

const registerUser = async (userDetails) => {
  const response = await axios.post(`${baseURL}/user/register`, userDetails);
  if (response.data) {
    return response.data;
  }
};
const signinUser = async (userDetails) => {
  const response = await axios.post(`${baseURL}/user/login`, userDetails);
  if (response.data) {
    return response.data;
  }
};
const getUserWishlist = async () => {
  const response = await axios.get(`${baseURL}/user/wishlist`, headersConfig);
  if (response.data) {
    return response.data;
  }
};

export const userService = { registerUser, signinUser, getUserWishlist };
