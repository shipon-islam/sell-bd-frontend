import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mx-8 min-h-[56vh] md:mx-16 lg:mx-24 font-poppins">
      {children}
    </div>
  );
}
