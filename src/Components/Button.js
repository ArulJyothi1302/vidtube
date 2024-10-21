import React from "react";

const Button = ({ name }) => {
  return (
    <div className="my-2">
      <button className="mx-2 px-4 py-2 bg-gray-200 hover:bg-black hover:text-white text-lg rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
