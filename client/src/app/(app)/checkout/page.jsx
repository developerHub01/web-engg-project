"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [cartList, setCartList] = useState([]);
  const [checkoutFormData, setCheckoutFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (!jwt) router.push("/");
    setCartList(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleFormChange = (e) => {
    setCheckoutFormData({
      ...checkoutFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // TODO: Send checkout data to server and clear cart
  };

  return (
    <section className="w-full max-w-6xl">
      <h1 className="text-center font-bold text-4xl text-primary pb-5">
        Cart List
      </h1>
      <section className="py-10 px-10 w-full flex flex-col md:flex-row gap-5">
        <form className="w-full flex flex-col gap-4">
          <Input
            className=""
            name="name"
            value={checkoutFormData["name"]}
            placeholder="Full name"
            onChange={handleFormChange}
          />
          <Input
            className=""
            type="email"
            name="email"
            value={checkoutFormData["email"]}
            placeholder="Email address"
            onChange={handleFormChange}
          />
          <Input
            className=""
            name="phone"
            value={checkoutFormData["phone"]}
            placeholder="Phone number"
            onChange={handleFormChange}
          />
          <Textarea
            className="max-h-60"
            name="address"
            placeholder="Address"
            value={checkoutFormData["address"]}
            onChange={handleFormChange}
          />
        </form>
        <div className="w-ful min-w-[300px] flex-shrink-0 shadow-lg rounded-md border p-4 flex flex-col gap-4">
          <p className="text-lg font-semibold">
            Total:
            {cartList
              .reduce((acc, curr) => {
                return acc + curr.price * curr.quantity;
              }, 0)
              .toFixed(2)}
            $
          </p>
          <Button className="w-full" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Checkout;
