import axios from "axios";
import { baseURL } from "../../utils/AxiosConfig";

export const getOneType = async (typeId) => {
  const response = await axios.get(`${baseURL}/type/${typeId}`);
  if (response.data) {
    return response.data;
  }
};

export const typeService = {
  getOneType,
};
