import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login, logout } from "../redux/modules/authSlice";

function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(login());
    onLoginSuccess && onLoginSuccess();
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignUpSuccess = () => {
    setIsSignUp(false);
  };

  return (
    <Container>
      <FormBox>
        <h1>{isSignUp ? "회원가입" : "로그인"}</h1>
        <input
          type="text"
          placeholder={isSignUp ? "아이디 (4~10글자)" : "아이디"}
          minLength="4"
          maxLength="10"
        ></input>
        <input
          type="password"
          placeholder={isSignUp ? "비밀번호 (4~15글자)" : "비밀번호"}
          minLength="4"
          maxLength="15"
        ></input>
        {isSignUp && (
          <input
            type="text"
            placeholder={isSignUp ? "닉네임 (1~10글자)" : "닉네임"}
            minLength="1"
            maxLength="10"
          ></input>
        )}
        <button onClick={isSignUp ? handleSignUpSuccess : handleLogin}>
          {isSignUp ? "회원가입" : "로그인"}
        </button>
        <p>
          {isSignUp ? "이미 회원 이신가요?" : "처음이신가요?"}
          <span onClick={toggleSignUp}>{isSignUp ? "로그인" : "회원가입"}</span>
        </p>
      </FormBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgrey;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  & h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  & input {
    height: 30px;
  }
  & input,
  button {
    margin-bottom: 20px;
  }
  & button {
    height: 50px;
    font-size: 15px;
  }
  & p {
    text-align: center;
  }
  & span {
    cursor: pointer;
    color: #0a66c2;
    margin-left: 5px;
  }
`;

export default Login;
