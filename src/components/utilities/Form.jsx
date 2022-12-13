import React from "react";

function Form({ children, ...rest }) {
  return (
    <form
      className="w-[85%] xl:w-[380px] xl:mt-8 md:w-[300px] mx-auto md:mx-0 md:ml-auto"
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
