import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const config = {baseUrl: 'https://jsonplaceholder.typicode.com'}

const axiosInstanceConfig: AxiosRequestConfig = {
    baseURL: config.baseUrl
};

const apiInstance: AxiosInstance = axios.create(axiosInstanceConfig);

export default apiInstance;