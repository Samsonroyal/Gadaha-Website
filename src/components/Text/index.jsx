import React from "react";

const sizeClasses = {
  txtInterSemiBold1919: "font-inter font-semibold",
  txtInterMedium18: "font-inter font-medium",
  txtInterSemiBold172: "font-inter font-semibold",
  txtInterBold4265: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterBold36: "font-bold font-inter",
  txtInterBold25: "font-bold font-inter",
  txtInterBold65: "font-bold font-inter",
  txtInterSemiBold1543: "font-inter font-semibold",
  txtInterSemiBold1475: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
