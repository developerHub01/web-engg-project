import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductDetails from "./ProductDetails";

const PopularProductItem = ({
  name,
  description,
  mrp,
  sellingPrice,
  itemQuantityType,
  images,
  categories,
}) => {
  const category = categories[0]?.name;

  return (
    <div className="flex flex-col w-full shadow-lg rounded-md justify-center items-center gap-2 p-4 border mx-auto text-center">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + images[0].url}
        width={300}
        height={300}
        alt={name}
        className="size-full max-w-[300px] object-contain"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex justify-center items-center gap-2">
        <p>${sellingPrice}</p>
        {mrp && <p className="line-through">${mrp}</p>}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add To Cart</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[700px] w-[90%]">
          <DialogHeader className="hidden">
            <DialogTitle hidden>Edit profile</DialogTitle>
            <DialogDescription hidden>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProductDetails
            name={name}
            description={description}
            mrp={mrp}
            sellingPrice={sellingPrice}
            itemQuantityType={itemQuantityType}
            images={images}
            category={category}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopularProductItem;
