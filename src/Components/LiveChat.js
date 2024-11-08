import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/ChatSlice";
import { generateRandName, generateRandomMessage } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);
  const mode = useSelector((store) => store.darkMode.isDark);
  useEffect(() => {
    const time = setInterval(() => {
      //   console.log("Welcome to chat");
      dispatch(
        addMessage({
          name: generateRandName(),
          message: generateRandomMessage(10),
        })
      );
      return () => clearInterval(time);
    }, 2000);
  }, []);
  return (
    <>
      <div
        className={`h-[500px] ml-2 p-4 border ${
          !mode ? "border-black" : "border-white"
        } rounded-lg w-full overflow-y-scroll flex flex-col-reverse`}
      >
        {message.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className={`border ${!mode ? "border-black" : "border-white"} p-2 m-2`}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(addMessage({ name: "Arul", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="p-2 w-96 shadow-md text-black"
          type="text"
          placeholder="Message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className={`p-2 mx-1 bg-black ${
            !mode ? " bordeer border-black" : "border border-white"
          } text-white rounded-l-full`}
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
