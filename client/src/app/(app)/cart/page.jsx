"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const CartPage = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setCartList(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleRemoveCartItem = (cartId) => {
    const updatedCartList = cartList.filter((item) => item.cartId !== cartId);
    localStorage.setItem("cart", JSON.stringify(updatedCartList));
    setCartList(updatedCartList);
    toast.success("Item removed from cart successfully!");
  };

  const increaseQuantity = (id) => {
    const allCarts = cartList.map((item) => {
      if (item.cartId === id)
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(allCarts));
    setCartList(allCarts);
  };

  const decreaseQuantity = (id) => {
    const allCarts = cartList
      .map((item) => {
        if (item.cartId === id) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return null; // Mark item for removal if quantity becomes 0
        }
        return item;
      })
      .filter((item) => item !== null); // Remove null items from the array

    localStorage.setItem("cart", JSON.stringify(allCarts));
    setCartList(allCarts);
    toast.success("Item removed from cart successfully!");
  };

  return (
    <section className="py-10 px-10 max-w-4xl mx-auto">
      <h1 className="text-center font-bold text-4xl text-primary pb-5">
        Cart List
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col pb-4 gap-4">
          {cartList.map((item, index) => (
            <div
              key={index}
              className="shadow-xl p-4 rounded-sm flex flex-col sm:flex-row sm:items-center gap-4 border"
            >
              <div className="aspect-square overflow-hidden w-full sm:max-w-44 rounded-sm">
                <Image
                  src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + item.image}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>

                <div className="flex items-center mt-auto">
                  <Button
                    size="icon"
                    variant="outline"
                    className="text-lg"
                    onClick={() => decreaseQuantity(item.cartId)}
                  >
                    -
                  </Button>
                  <span className="inline-flex justify-center items-center w-14 text-center h-full">
                    {item.quantity}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="text-lg"
                    onClick={() => increaseQuantity(item.cartId)}
                  >
                    +
                  </Button>
                </div>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleRemoveCartItem(item.cartId)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          {cartList.length === 0 && (
            <div className="text-center flex flex-col justify-center mx-auto gap-4">
              <p>Your cart is empty.</p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {cartList.length !== 0 && (
        <div className="flex justify-center">
          <Link href="/check-out">
            <Button>Check out</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartPage;
