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
      dispatch(
        addMessage({
          name: generateRandName(),
          message: generateRandomMessage(10),
        })
      );
      return () => clearInterval(time);
    }, 2000);
  }, [dispatch]);

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
          dispatch(addMessage({ name: "Arul", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <input
            className="p-2 w-full sm:w-[80%] md:w-[90%] shadow-md text-black mb-2 sm:mb-0"
            type="text"
            placeholder="Message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button
            className={`p-2 mx-1 bg-black ${
              !mode ? "border border-black" : "border border-white"
            } text-white rounded-l-full w-full sm:w-auto`}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default LiveChat;
