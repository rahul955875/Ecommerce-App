import { createSlice } from "@reduxjs/toolkit";
const authParesData = JSON.parse(localStorage.getItem("authLogin"));

const auth = authParesData || {
  user: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {auth},
  reducers: {
    setAuth: (state, action) => {
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
    },
  },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
