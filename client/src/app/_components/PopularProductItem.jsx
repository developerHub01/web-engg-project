import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PopularProductItem = ({
  name,
  description,
  mrp,
  sellingPrice,
  images,
}) => {
  console.log(images[0]);

  return (
    <div className="flex flex-col w-full shadow-lg rounded-md justify-center items-center gap-2 p-4 border max-w-64 mx-auto text-center">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + images[0].url}
        width={300}
        height={300}
        alt={name}
        className="size-full max-w-[200px] object-contain"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex justify-center items-center gap-2">
        <p>${sellingPrice}</p>
        {mrp && <p className="line-through">${mrp}</p>}
      </div>
      <Button variant="outline">Add To Cart</Button>
    </div>
  );
};

export default PopularProductItem;
