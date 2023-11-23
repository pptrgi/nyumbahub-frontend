import axios from "axios";

import { baseURL } from "../../utils/axiosSetup";

// The server couples status code with json body for all responses(successful and unsuccessful requests).
// The returned status code defines if the request was successful or not. Thus createAsyncThunk() will accept even unsuccessful request's response data as payload without its knowledge
// To prevent this, we check the response status code first, if in 200, we return the response data as the action payload
// What isn't achieved yet is, if the status isn't within 200, createAsyncThunk() needs to have the thrown error as action's error. ATM it is rejecting the promise and showing "rejected" as the action.error. But the thrown error message needs to be shown
// There will be changes upon finding solution

export const getOneType = async (typeId) => {
  const response = await axios.get(`${baseURL}/type/${typeId}`);
  if (String(response?.status).charAt(0) == "2") {
    return response.data;
  } else {
    return;
  }
};

export const typeService = {
  getOneType,
};
