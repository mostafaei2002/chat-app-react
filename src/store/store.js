import { configureStore } from "@reduxjs/toolkit";

import messagesReducer from "./messagesSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    users: usersReducer,
  },
});

export default store;
