import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const mode = useSelector((store) => store.darkMode.isDark);
  return (
    <div className="my-2">
      <button
        className={`mx-2 px-4 py-2 ${
          mode ? "bg-gray-900 text-white" : "bg-gray-200"
        } hover:bg-black hover:text-white text-lg rounded-lg`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
