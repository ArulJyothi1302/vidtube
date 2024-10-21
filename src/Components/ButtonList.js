import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Cricket",
    "Football",
    "Gaming",
    "Music",
    "News",
    "Movies",
    "Cooking",
    "Comedy",
    "Electronics",
    "Technology",
    "Buisness",
    "Trading",
  ];
  return (
    <div
      className="flex overflow-x-auto  no-bar"
      // Explicitly set width and height to create overflow
    >
      {list.map((list, ind) => (
        <Button key={ind} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
