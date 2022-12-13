import React from "react";

export default function TextInput({ formname, ...rest }) {
  return (
    <div className="mt-5">
      <p className="capitalize">{formname}</p>
      <input
        {...rest}
        className="focus:outline-none w-full border-slate-400 border py-2 pl-3 rounded-md"
      />
    </div>
  );
}
