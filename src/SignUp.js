import React,{useState} from 'react';
import "./SignUp.scss";
import {useHistory} from "react-router-dom";
import Axios from "axios";

import CustomButton from "./Custom-Button"


function SignUp() {
  const history = useHistory();
   const [email, setEmail] = useState("");
   
    const [userName, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [pnumber, setPNumber] = useState('');

const register = (e) => {
  Axios.post("http://localhost:8090",
   {email: email,
   address: address,
   userName: userName,
   pnumber: pnumber 
  })
  
   
  //  e.preventDefault();
  
  //    setEmail("");
     
  //    setAddress('');
  //    setPNumber('');
  //    setUserName('');
  };

    




return (

        <div className="sign__up">
             <h3 style={{marginLeft:"-6.5%"}} >I Don't Have An Account</h3>
             <span style={{marginLeft: "-4.5%"}}>Sign Up With Your Email And Phone Number</span>
            <form className="form">
                <input autoComplete="off" className="form-control" placeholder="username" value={userName} type="text" name="username" onChange={e => setUserName(e.target.value)}  />
                <input autoComplete="off" className="form-control" placeholder="Email" value={email} type="email" name="email" onChange={e => setEmail(e.target.value)}  />
                <input autoComplete="off" className="form-control" placeholder="address" value={address} type="text" name="address" onChange={e => setAddress(e.target.value)}  />
                <input autoComplete="off" className="form-control" placeholder="phone number" value={pnumber} type="text" name="address" onChange={e => setPNumber(e.target.value)}  />

            </form>
            <CustomButton onClick={register}>
                    SIGN UP
                </CustomButton>
        </div>
    )
}


export default SignUp;