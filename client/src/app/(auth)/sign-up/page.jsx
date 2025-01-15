"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
      const response = await GlobalApi.signUp(formData);
      const data = response.data;

      toast("Account created successfully");
      setIsLoading(false);
      localStorage.clear();
      return router.push("/sign-in");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || // API error
        error?.message || // General error
        "Failed to create account. Please try again.";
      setIsLoading(false);
      toast(errorMessage);
    }
  };

  const isSubmitDisabled =
    !formData.username || !formData.password || !formData.email;

  return (
    <div className="w-full max-w-sm shadow-lg rounded-md p-5 border py-8">
      <div className="text-center pb-4">
        <Link href={"/"} className="text-center font-bold text-lg text-primary">
          Grocery Store
        </Link>
      </div>
      <h1 className="text-2xl text-primary pb-4 font-semibold">Signup</h1>
      <form
        className="flex flex-col gap-5 items-baseline"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          value={formData["username"]}
          placeholder="Username"
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData["email"]}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData["password"]}
          placeholder="Password"
        />
        <Button disabled={isSubmitDisabled || isLoading}>
          {" "}
          {isLoading && (
            <span className="size-6 rounded-full bg-transparent border-2 border-white border-x-transparent animate-spin"></span>
          )}{" "}
          Signup
        </Button>
      </form>
      <div className="pt-4">
        <Link href={"/sign-in"} className="text-sm">
          Already have an account?{" "}
          <span className="underline text-primary">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
