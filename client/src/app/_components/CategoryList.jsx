import React, { Fragment } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async ({ exceptCategory }) => {
  const categoryList = await getCategoryList();
  return (
    <div className="py-5">
      <h2 className="text-3xl text-primary font-bold pb-5">
        {exceptCategory ? "Other Categories" : "Shop By Category"}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {categoryList?.map((category) => (
          <Fragment key={category.id}>
            {exceptCategory !== category.name && (
              <Link
                href={`/products-category/${category?.name?.replaceAll(
                  " ",
                  "_"
                )}`}
                className="flex flex-col gap-2 justify-center cursor-pointer items-center w-full aspect-square rounded-md shadow-md bg-primary/10 hover:bg-primary/20 transition-all"
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category.icon[0].url
                  }
                  alt={category.name}
                  width={50}
                  height={50}
                  objectFit="contain"
                />
                <span>{category.name}</span>
              </Link>
            )}
          </Fragment>
        )) || <p>No categories found.</p>}
      </div>
    </div>
  );
};

const getCategoryList = async () => {
  const response = await GlobalApi.getCategories();

  return response?.data?.data;
};

export default CategoryList;
