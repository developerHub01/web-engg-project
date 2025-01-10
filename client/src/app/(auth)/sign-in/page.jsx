import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="w-full max-w-sm shadow-lg rounded-md p-5 border py-8">
      <div className="text-center pb-4">
        <Link href={"/"} className="text-center font-bold text-lg text-primary">
          Grocery Store
        </Link>
      </div>
      <h1 className="text-2xl text-primary pb-4 font-semibold">Login</h1>
      <form action="" className="flex flex-col gap-5 items-baseline">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
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
