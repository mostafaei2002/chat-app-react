import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUserApi } from "../services/api";

const initialState = {
  users: [],
};

export const addUser = createAsyncThunk("users/addUser", async (name) => {
  console.log(name);
  const response = await addUserApi(name);
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      console.log(action);
      state.users = action.payload.users;
    });
  },
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
