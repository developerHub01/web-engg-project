"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  if (typeof window !== "undefined" && sessionStorage.getItem("jwt"))
    router.back();

  return (
    <section className="w-full h-full min-h-screen grid place-items-center p-5">
      {children}
    </section>
  );
};

export default AuthLayout;
