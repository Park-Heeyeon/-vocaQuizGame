import { LoginFormType, SignUpFormType } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

export const requestSignUp = async (userInfo: SignUpFormType) => {
  const response = await api.post("/signup", {
    params: { userInfo },
  });
  return response.data;
};

export const requestLogin = async (loginForm: LoginFormType) => {
  const response = await api.post("/login", {
    params: { loginForm },
  });
  return response.data;
};

export const requestLogout = async () => {
  const response = await api.post("/logout");
  return response.data;
};
