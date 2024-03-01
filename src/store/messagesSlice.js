import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER } from "../constants";

const initialState = {
  messages: [],
};

export const addMessage = createAsyncThunk(
  "messages/addMessage",
  ({ author, message }) => {
    const socket = new WebSocket(SERVER);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "ADD_MESSAGE",
          message,
          author,
        })
      );
    };
    return { author, message };
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { receiveMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
