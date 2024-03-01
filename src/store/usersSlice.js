import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER } from "../constants";

const initialState = {
  users: [],
  currentUser: "",
};

export const setCurrentUser = createAsyncThunk(
  "users/setCurrentUser",
  async (username) => {
    const socket = new WebSocket(SERVER);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "ADD_USER",
          name: username,
        })
      );
    };
    return username;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
