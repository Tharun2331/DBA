import React,{useState} from 'react';
import "./SignIn.scss";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();

         setEmail("");
         setPassword("");
    }

    
    return (
        <div className="sign__in">
            <h2>I already have an account</h2>
            <span>Sign In With Your Email</span>
            <form className="form">
                <input placeholder="Email" value={email} type="email" name="email" onChange={e => setEmail(e.target.value)}/>
                <input placeholder="password" value={password} type="password" name="password" onChange={e => setPassword(e.target.value)}/>
                <input type="submit" name="button" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default SignIn
