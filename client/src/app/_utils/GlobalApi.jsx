import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategories = () => axiosClient.get("/categories?populate=*");

const getSliders = () => axiosClient.get("/sliders?populate=*");

export default {
  getCategories,
  getSliders,
};
