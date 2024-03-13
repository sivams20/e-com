import React from "react";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { setUser } from "../../redux/actions/auth/authActions";

function Login() {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      dispatch(setUser(codeResponse));
    },
  });

  return (
    <div>
      <button onClick={() => login()}>Continue with Google</button>;
    </div>
  );
}

export default Login;
