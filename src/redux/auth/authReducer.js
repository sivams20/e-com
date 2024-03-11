import { AUTH_GOOGLE } from "./authTypes";

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GOOGLE:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
