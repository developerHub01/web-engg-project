import React from "react";
import GlobalApi from "../_utils/GlobalApi";
import PopularProductItem from "./PopularProductItem";

const PopularProductsByCategory = async ({ categoryName }) => {
  const products = await getProducts(categoryName);

  return (
    <div className="py-5">
      <h2 className="text-3xl text-primary font-bold pb-5">Popular Product</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products?.map((product) => (
          <PopularProductItem key={product.id} {...product} />
        )) || <p className="text-center p-4">No products found.</p>}
      </div>
      {products.length === 0 && (
        <p className="text-center p-4">No products found.</p>
      )}
    </div>
  );
};

const getProducts = async (categoryName) => {
  const response = await GlobalApi.getPopularProductsByCategory(categoryName);

  return response?.data?.data;
};

export default PopularProductsByCategory;
