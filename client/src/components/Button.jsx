import clsx from "clsx";
import React from 'react';

const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={clsx("px-3 py-2 outline-none flex items-center gap-2", className)}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};


export default Button;
