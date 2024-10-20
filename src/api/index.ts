import { SignUpFormType } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

export const postSignUp = async (userInfo: SignUpFormType) => {
  const response = await api.post("/signup", {
    params: { userInfo },
  });
  return response.data;
};
