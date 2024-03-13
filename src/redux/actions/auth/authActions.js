import { AUTH_GOOGLE } from "./authTypes";

export const setUser = (user) => ({
  type: AUTH_GOOGLE,
  payload: user,
});
