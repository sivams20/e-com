import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
  });

  return (
    <div>
      <button onClick={() => login()}>Continue with Google</button>;
    </div>
  );
}

export default Login;
