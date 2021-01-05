import React,{useState} from 'react';
import "./SignIn.scss";
import CustomButton from "./Custom-Button";
import Axios from "axios";
import {useHistory} from "react-router-dom";

function SignIn() {
    const [emailLogin, setEmailLogin] = useState("");
    const [pnumberLogin, setPNumberLogin] = useState('');
    const history = useHistory();

    const login = (e) => {
        Axios.post("http://localhost:8090/login",
         {emailLogin: emailLogin,
         pnumberLogin: pnumberLogin 
        })
         .then(response =>  history.push ("/")).catch((error)=> alert(error.message));
         e.preventDefault();

         setEmailLogin('');
         setPNumberLogin('');

    }
    
    return (
        <div className="sign__in">
           <h3 style ={{marginLeft: "-7%" }}>I already have an account</h3>
           <span style={{marginLeft: "-5%"}}>Sign In With Your Email And Phone Number</span>
            <form  className="form"  >
                <input autoComplete="off" className="signIn form-control" placeholder="Email" value={emailLogin} type="email" name="email" onChange={e => setEmailLogin(e.target.value)}/>
                <input autoComplete="off" className="signIn form-control" placeholder="phone number" value={pnumberLogin} type="text" name="pnumber" onChange={e =>setPNumberLogin(e.target.value)}/>
                
            </form>
            <CustomButton onClick={login}>
                    SIGN IN
                </CustomButton>
        </div>
    )
}

export default SignIn