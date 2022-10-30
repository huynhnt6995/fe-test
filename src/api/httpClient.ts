import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ResponseType } from "../types/ResponseType";
import authUtils from "../utils/authUtils";

class HttpClient {
  instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.instance = axios.create({ baseURL: baseUrl });
    this.instance.interceptors.request.use(function (config) {
      if (!config.headers) {
        config.headers = {};
      }

      const token = authUtils.getToken();
      config.headers.Authorization = token;

      return config;
    });
  }

  async get<DTO>(url: string, config?: AxiosRequestConfig) {
    const result = await this.instance.get<ResponseType<DTO>>(url, config);
    return result.data;
  }

  async post<DTO, D>(url: string, data: D, config?: AxiosRequestConfig) {
    const result = await this.instance.post<ResponseType<DTO>>(url, data, config);
    return result.data;
  }

  async put<DTO, D>(url: string, data: D, config?: AxiosRequestConfig) {
    const result = await this.instance.put<ResponseType<DTO>>(url, data, config);
    return result.data;
  }

  async delete<DTO>(url: string, config?: AxiosRequestConfig) {
    const result = await this.instance.delete<ResponseType<DTO>>(url, config);
    return result.data;
  }
}

const httpClient = new HttpClient(`${process.env.REACT_APP_API_URL}`);

export default httpClient;
