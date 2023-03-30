import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ResetPasswordRequest,
  LoginRequest,
  signUp,
  SignUpRequest,
  resetPassword,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordData,
  setNewPassword,
  RefreshClient,
  setClientToken,
} from "api/auth.api";

import {
  deleteToken,
  deleteUser,
  persistToken,
  readToken,
} from "api/services/localStorage.service";
import { setUser } from "./user.slice";

export interface AuthSlice {
  token: string | null;
}
const token =
  // eslint-disable-next-line max-len
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ";

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async (loginPayload: LoginRequest, { dispatch }) =>
    // TODO : Need to Create interface for this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new Promise((res: any) => {
      /**Adding Hardcoded for login architecture. 
       * This needs to be remove once the login API is ready*/
      dispatch(
        setUser({
          id: 1,
          firstName: "John",
          lastName: "Doe",
          imgUrl: "test.png",
          userName: "@johnuma",
        })
      );
      persistToken(token, token);
      res(token);
    })
  // login(loginPayload).then((res) => {
  // //  dispatch(setUser(res.user));
  // //persistToken(token, token);
  // })
);

export const doSetClient = createAsyncThunk(
  "auth/doSetClient",
  async (clientPayload: RefreshClient) =>
    setClientToken(clientPayload).then((res) => {
      //  dispatch(setUser(res.user));

      persistToken(res.token, res.refresh_token);

      return res.token;
    })
);

export const doSignUp = createAsyncThunk(
  "auth/doSignUp",
  async (signUpPayload: SignUpRequest) => signUp(signUpPayload)
);

export const doResetPassword = createAsyncThunk(
  "auth/doResetPassword",
  async (resetPassPayload: ResetPasswordRequest) =>
    resetPassword(resetPassPayload)
);

export const doVerifySecurityCode = createAsyncThunk(
  "auth/doVerifySecurityCode",
  async (securityCodePayload: SecurityCodePayload) =>
    verifySecurityCode(securityCodePayload)
);

export const doSetNewPassword = createAsyncThunk(
  "auth/doSetNewPassword",
  async (newPasswordData: NewPasswordData) => setNewPassword(newPasswordData)
);

export const doLogout = createAsyncThunk(
  "auth/doLogout",
  () => {
    deleteToken();
    deleteUser();
    // dispatch(setUser(null));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state) => {
      state.token = token;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = "";
    });
  },
});

export default authSlice.reducer;
