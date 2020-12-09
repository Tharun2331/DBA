import React from 'react'
import "./SignInAndSignUp.scss";
import SignIn from './SignIn';
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
        
    )
}

export default SignInAndSignUp;