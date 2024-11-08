import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="p-2">
      <div className="flex items-center shadow-sm">
        <FontAwesomeIcon
          className="bg-black text-white p-2 mx-2 text-2xl h-5 rounded-full"
          icon={faUser}
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
