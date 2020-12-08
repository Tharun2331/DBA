import React from 'react'
import "./SignInAndSignUp.scss";
import SignIn from './SignIn';
import SignUp from "./SignUp";

function SignInAndSignUp() {
    return (
        <div className="row">
            <div className="col-6">
                <SignIn />
             </div>
             <div className="col-6">
                <SignUp />
             </div>
       </div>
        
    )
}

export default SignInAndSignUp;
