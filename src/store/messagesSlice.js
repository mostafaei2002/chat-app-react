import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      console.log(action.payload);
      state.messages.push(action.payload);
    },
    receiveMessage: (state, action) => {},
    updateUsers: (state, action) => {},
  },
});

export const { addMessage, addUser, receiveMessage, updateUsers } =
  messagesSlice.actions;
export default messagesSlice.reducer;
