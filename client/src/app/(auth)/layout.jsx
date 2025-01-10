import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="w-full h-full min-h-screen grid place-items-center p-5">
      {children}
    </section>
  );
};

export default AuthLayout;
