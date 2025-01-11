"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await GlobalApi.signIn(formData);
      const data = response.data;
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("jwt", data.jwt);
      toast("Logged in successfully");
      setIsLoading(false);
      return router.push("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || // API error
        error?.message || // General error
        "Failed to create account. Please try again.";

      setIsLoading(false);
      toast(errorMessage);
    }
  };

  const isSubmitDisabled = !formData.password || !formData.identifier;

  return (
    <div className="w-full max-w-sm shadow-lg rounded-md p-5 border py-8">
      <div className="text-center pb-4">
        <Link href={"/"} className="text-center font-bold text-lg text-primary">
          Grocery Store
        </Link>
      </div>
      <h1 className="text-2xl text-primary pb-4 font-semibold">Login</h1>
      <form
        className="flex flex-col gap-5 items-baseline"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          value={formData["identifier"]}
          name="identifier"
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="password"
          value={formData["password"]}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <Button disabled={isSubmitDisabled || isLoading}>
          {isLoading && (
            <span className="size-6 rounded-full bg-transparent border-2 border-white border-x-transparent animate-spin"></span>
          )}{" "}
          Login
        </Button>
      </form>
      <div className="pt-4">
        <Link href={"/sign-up"} className="text-sm">
          Don't have an account?{" "}
          <span className="underline text-primary">Signup</span>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
