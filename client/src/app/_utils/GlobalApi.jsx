import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategories = () => axiosClient.get("/categories?populate=*");

const getSliders = () => axiosClient.get("/sliders?populate=*");

const getPopularProducts = () => axiosClient.get("/products?populate=*");

const getPopularProductsByCategory = (categoryName) =>
  axiosClient.get(
    `/products?populate=*&filters[categories][name][$in]=${categoryName}`
  );

export default {
  getCategories,
  getSliders,
  getPopularProducts,
  getPopularProductsByCategory,
};
