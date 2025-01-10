"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetails = ({
  name,
  description,
  itemQuantityType,
  sellingPrice,
  images,
  category,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4">
      <div className="w-full h-full">
        <Image
          src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + images[0].url}
          alt={name}
          width={300}
          height={300}
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-700 pb-2">{description}</p>
        <p className="text-base">Category: {category}</p>
        <p className="text-xl font-bold">$ {sellingPrice}</p>
        <p className="text-lg font-bold">
          Quantity: <span className="capitalize">{itemQuantityType}</span>
        </p>
        <div className="flex items-center mt-auto">
          <Button
            size="icon"
            variant="outline"
            className="text-lg"
            onClick={() => {
              if (quantity > 1) {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            -
          </Button>
          <span className="inline-flex justify-center items-center w-14 text-center h-full">
            {quantity}
          </span>
          <Button
            size="icon"
            variant="outline"
            className="text-lg"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
          <span className="text-lg">
            {" "}
            = $ {(quantity * sellingPrice).toFixed(2)}
          </span>
        </div>
        <Button className="mt-auto">
          <ShoppingBasket /> Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
