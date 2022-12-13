import React from "react";

export default function CardContainer({ children, col = "3" }) {
  return (
    <div
      className={`grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-${col} justify-items-center  }`}
    >
      {children}
    </div>
  );
}
