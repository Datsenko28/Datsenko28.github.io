import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const config = {baseUrl: 'https://jsonplaceholder.typicode.com'}

const axiosInstanceConfig: AxiosRequestConfig = {
    baseURL: config.baseUrl
};

const apiInstance: AxiosInstance = axios.create(axiosInstanceConfig);



const users = "/users"
const postsById = "/posts/?userId="

const get = (url: string) => {
    return apiInstance.get(url)
      .then((response) => {
        return response.data;
      });
  };
  
  const getUsers = () => {
    return get(users)
      .then((response) => {
        return response;
      });
  };

  const getPostsById = (id:number) => {
    return get(`${postsById}${id}`)
      .then((response) => {
        return response;
      });
  };

  export {getUsers, getPostsById};