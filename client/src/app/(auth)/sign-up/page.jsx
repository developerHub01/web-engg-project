import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-full max-w-sm shadow-lg rounded-md p-5 border py-8">
      <div className="text-center pb-4">
        <Link href={"/"} className="text-center font-bold text-lg text-primary">
          Grocery Store
        </Link>
      </div>
      <h1 className="text-2xl text-primary pb-4 font-semibold">Signup</h1>
      <form action="" className="flex flex-col gap-5 items-baseline">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Signup</Button>
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
