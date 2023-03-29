import { httpApi } from "api/http.api";
import { IUser } from "interfaces/IUser";


export interface AuthData {
  email: string;
  password: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface SecurityCodePayload {
  code: string;
}

export interface NewPasswordData {
  newPassword: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RefreshClient {
  client_id: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}


export interface LoginResponse {
  token: string;
  user: IUser;
  refresh_token: string;
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("CmsAuth?callType=login", { ...loginPayload })
    .then(({ data }) => data);

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
  httpApi.post<undefined>("signUp", { ...signUpData }).then(({ data }) => data);

export const refreshToken = (refreshToken: RefreshTokenRequest): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("CmsAuth?callType=persistent", { ...refreshToken })
    .then(({ data }) => data);

export const setClientToken = (request: {client_id:string}): Promise<LoginResponse> =>
  httpApi
    .post<LoginResponse>("CmsAuth?callType=set_client_of_account", { ...request })
    .then(({ data }) => data);



export const resetPassword = (
  resetPasswordPayload: ResetPasswordRequest
): Promise<undefined> =>
  httpApi
    .post<undefined>("forgotPassword", { ...resetPasswordPayload })
    .then(({ data }) => data);

export const verifySecurityCode = (
  securityCodePayload: SecurityCodePayload
): Promise<undefined> =>
  httpApi
    .post<undefined>("verifySecurityCode", { ...securityCodePayload })
    .then(({ data }) => data);

export const setNewPassword = (
  newPasswordData: NewPasswordData
): Promise<undefined> =>
  httpApi
    .post<undefined>("setNewPassword", { ...newPasswordData })
    .then(({ data }) => data);
