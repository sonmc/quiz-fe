import { createSlice } from "@reduxjs/toolkit";
import API from "../../../config/axiosInstance";
import { ROUTER_NAME } from "../../../routers/typeRouter";
import { initState } from "../../../constants/initState";

const registerSlices = createSlice({
  name: "registerReducers",
  initialState: initState,
  reducers: {
    requestRegisterFetching: (state) => {
      state.loading = true;
    },
    requestRegisterSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.hasErrors = null;
    },
    requestRegisterFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
      state.data = null;
    },
  },
});

export const {
  requestRegisterFailure,
  requestRegisterFetching,
  requestRegisterSuccess,
} = registerSlices.actions;

export const dataRegisterSelector = (state) => state.auth.registerReducers;
export default registerSlices.reducer;

export function registerMember(params) {
  return async (dispatch) => {
    dispatch(requestRegisterFetching());
    try {
      const { email, password, firstName, lastName, push } = params;
      let response = await API.post("users/register", {
        email,
        password,
        firstName,
        lastName,
      });
      console.log("response.data", response.data);
      if (response.data) {
        dispatch(requestRegisterSuccess(response.data));
        push(ROUTER_NAME.LOGIN_SCREEN);
      }
    } catch (error) {
      dispatch(requestRegisterFailure(error));
    }
  };
}
