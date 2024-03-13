import { createStore } from "redux";
import authReducer from "./reducers/auth/authReducer";

const store = createStore(authReducer);

export default store;
