import React from "react";
import GlobalApi from "../_utils/GlobalApi";
import PopularProductItem from "./PopularProductItem";

const PopularProducts = async () => {
  const products = await getProducts();

  console.log(products);

  return (
    <div className="py-5">
      <h2 className="text-3xl text-primary font-bold pb-5">Popular Product</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products?.map((product) => (
          <PopularProductItem key={product.id} {...product} />
        )) || <p>No products found.</p>}
      </div>
    </div>
  );
};
const getProducts = async () => {
  const response = await GlobalApi.getPopularProducts();
  return response?.data?.data;
};

export default PopularProducts;
