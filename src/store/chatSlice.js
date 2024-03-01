import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      console.log(action.payload);
      state.messages.push(action.payload);
    },
    addUser: (state, action) => {},
    receiveMessage: (state, action) => {},
    updateUsers: (state, action) => {},
  },
});

export const { addMessage, addUser, receiveMessage, updateUsers } =
  chatSlice.actions;
export default chatSlice.reducer;
