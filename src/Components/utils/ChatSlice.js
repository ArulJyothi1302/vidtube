import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "Chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length) state.message.splice(10, 1);
      state.message.unshift(action.payload);
    },
  },
});
export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
