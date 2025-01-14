import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ProductDetails from "./ProductDetails";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PopularProductItem = ({
  id,
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
    <div className="flex flex-col w-full shadow-lg rounded-md justify-center items-center gap-2 border mx-auto text-center p-4">
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

      <Sheet className="!p-0">
        <SheetTrigger asChild>
          <Button variant="outline">Add To Cart</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="hidden">
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="w-full h-full">
            <ProductDetails
              id={id}
              name={name}
              description={description}
              mrp={mrp}
              sellingPrice={sellingPrice}
              itemQuantityType={itemQuantityType}
              images={images}
              category={category}
            />
          </ScrollArea>
          <SheetFooter className="hidden"></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PopularProductItem;
