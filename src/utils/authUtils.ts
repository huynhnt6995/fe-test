import cookie from "js-cookie";
import { encrypt, decrypt } from "crypto-js/aes";
import utf8 from "crypto-js/enc-utf8";

import User from "../types/User";

const SECRET_KEY = process.env.REACT_APP_SECRET as string;

const getToken = () => {
  const data = cookie.get("token");
  if (data) {
    return decrypt(data, SECRET_KEY).toString(utf8);
  }
};

const setToken = (token: string) => {
  return cookie.set("token", encrypt(token, SECRET_KEY).toString());
};

const clearToken = () => {
  return cookie.remove("TOKEN");
};

export const setUser = (user: User) => {
  sessionStorage.setItem("user", encrypt(JSON.stringify(user), SECRET_KEY).toString());
};

export const getUser = (): User => {
  const data = sessionStorage.getItem("user");

  if (data) {
    try {
      return JSON.parse(decrypt(data, SECRET_KEY).toString(utf8));
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  return {} as User;
};

const clearUser = () => {
  return cookie.remove("user");
};

const authUtils = {
  getToken,
  setToken,
  clearToken,
  getUser,
  setUser,
  clearUser,
};

export default authUtils;
