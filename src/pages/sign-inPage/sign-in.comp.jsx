import React from "react";
import "./sign-in.style.scss";
import SignIn from "../../components/sign-in/signin.comp";
import SignUp from "../../components/sign-up/signup.comp";

const SignInPage = () => (
  <div className="sign-in-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInPage;
