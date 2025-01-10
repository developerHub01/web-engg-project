import CategoryList from "@/app/_components/CategoryList";
import PopularProductsByCategory from "@/app/_components/PopularProductsByCategory";
import React from "react";

const CategoryPage = async ({ params }) => {
  const categoryName = params?.categoryName?.replaceAll("_", " ");

  return (
    <>
      <div className="bg-primary text-white px-5 sm:px-10 py-3">
        <h1 className="text-xl font-bold text-center">{categoryName}</h1>
      </div>
      <div className="px-5 w-full max-w-7xl mx-auto flex flex-col gap-4 pb-5">
        <CategoryList exceptCategory={categoryName} />
        <PopularProductsByCategory categoryName={categoryName} />
      </div>
    </>
  );
};

export default CategoryPage;
