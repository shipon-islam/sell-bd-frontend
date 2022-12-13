import React from "react";

function Button({ name, ...rest }) {
  return (
    <button
      className="bg-blue block w-full
            disabled:bg-slate-600/40 disabled:text-blue-500/50 disabled:hover:shadow-none  font-2xl uppercase font-bold bg-orange-300 py-3 mt-8 rounded-lg text-white"
      {...rest}
    >
      {name}
    </button>
  );
}

export default Button;
