import React from "react";
import { useAuth } from "context/AuthContext";

function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
  };

  return (
    <div>
      <h1>로그인</h1>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Login;
