import { createSlice } from "@reduxjs/toolkit";
import API from "../../../config/axiosInstance";

import { initState } from "../../../constants/initState";
import { ROUTER_NAME } from "../../../routers/typeRouter";

const loginSlices = createSlice({
  name: "loginReducers",
  initialState: initState,
  reducers: {
    requestLoginFetching: (state) => {
      state.loading = true;
    },
    requestLoginSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.hasErrors = null;
    },
    requestLoginFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
      state.data = null;
    },
  },
});

export const {
  requestLoginFailure,
  requestLoginFetching,
  requestLoginSuccess,
} = loginSlices.actions;

export const dataLoginSelector = (state) => state.auth.loginReducers;
export default loginSlices.reducer;

export function login(params) {
  return async (dispatch) => {
    dispatch(requestLoginFetching());
    try {
      const { email, password, push } = params;
      const response = await API.post("/signin", {
        email,
        password,
      });

      if (response.data) {
        dispatch(requestLoginSuccess(response.data));
        localStorage.setItem("token", JSON.stringify(response.data));
        push(ROUTER_NAME.HOME_PAGE);
      }
    } catch (error) {
      dispatch(requestLoginFailure(error));
    }
  };
}
