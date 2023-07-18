//user reducer
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../types/type";

type UserState = {
  email: string;
  password: string;
};

const initialState: UserState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
