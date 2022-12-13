import React from "react";

export default function TextInput({
  label,
  handleToggle,
  name,
  icon,
  ...rest
}) {
  let ReactIcon = icon;
  return (
    <div className="mt-3">
      <label
        htmlFor="username"
        className="capitalize font-semibold pb-1 pl-1 inline-block"
      >
        {label}
      </label>
      <div className="relative">
        <input
          className="outline-none block border-orange-300 border-b-[0.1rem] bg-transparent  py-1  w-full text-lg pl-1 pr-9"
          name={name}
          {...rest}
        />
        <ReactIcon
          onClick={() => handleToggle(name)}
          className="absolute cursor-pointer right-1 bottom-[0.4rem] text-[1.5rem] text-gray-400"
        />
      </div>
    </div>
  );
}
