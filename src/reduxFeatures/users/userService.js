import axios from "axios";

import { baseURL, assignHeaders } from "../../utils/axiosConfig";

// The server couples status code with json body for all responses(successful and unsuccessful requests).
// The returned status code defines if the request was successful or not. Thus createAsyncThunk() will accept even unsuccessful request's response data as payload without its knowledge
// To prevent this, we check the response status code first, if in 200, we return the response data as the action payload
// What isn't achieved yet is, if the status isn't within 200, createAsyncThunk() needs to have the thrown error as action's error. ATM it is rejecting the promise and showing "rejected" as the action.error. But the thrown error message needs to be shown
// There will be changes upon finding solution

const registerUser = async (userDetails) => {
  const response = await axios.post(`${baseURL}/user/register`, userDetails);
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const signinUser = async (userDetails) => {
  const response = await axios.post(`${baseURL}/user/login`, userDetails);
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const getUserWishlist = async () => {
  const response = await axios.get(`${baseURL}/user/wishlist`, assignHeaders());

  const responseStatusString = String(response.status);

  if (responseStatusString.charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const signOutUser = async () => {
  await axios.put(`${baseURL}/user/logout`, null, assignHeaders());
};

const editUserProfile = async (userInfo) => {
  const response = await axios.put(
    `${baseURL}/user/update/${userInfo.userId}`,
    userInfo.changedDetails,
    assignHeaders()
  );
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

const changePassword = async (userInfo) => {
  const response = await axios.put(
    `${baseURL}/user/change-password/${userInfo.userId}`,
    userInfo.values,
    assignHeaders()
  );
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

export const userService = {
  registerUser,
  signinUser,
  getUserWishlist,
  signOutUser,
  editUserProfile,
  changePassword,
};
