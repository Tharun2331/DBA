import React from "react";
import "./SignInAndSignUp.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInAndSignUp() {
  return (
    <div className="SignInAndSignUp row">
      <div className="col">
        <SignIn />
      </div>
      <div className="col">
        <SignUp />
      </div>
    </div>
  );
}

export default SignInAndSignUp;
