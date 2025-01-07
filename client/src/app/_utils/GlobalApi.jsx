import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategories = () => axiosClient.get("/categories?populate=*");

export default {
  getCategories,
};
