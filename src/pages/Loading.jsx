import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen w-screen fixed left-0 top-0 z-10 bg-gray-100 grid place-content-center">
      <div className="relative w-fit">
        <div className="w-32 h-32 rounded-full border-r-orange-400 border-l-blue-400 border-r-8 border-l-8 animate-spin "></div>
        <p className="absolute grid top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg font-bold text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}
