import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';

import '../css/LoginContainer.css'


const LoginContainer: React.FunctionComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [remember, setRemember] = useState(false);

    const renderEye = () => {
        return <i className={`LoginContainer_eye fas fa-eye${(!passwordVisible) ? "-slash demphasis" : " emphasis"}`} onClick={() => setPasswordVisible(!passwordVisible)}></i>
    }

    const checkBox = () => {
        return (
            <span onClick={() => setRemember(!remember)} style={{
                alignSelf: "flex-start", fontSize: "2rem", cursor: "pointer", userSelect: "none"}}>
            <i id="remember-me" className={`${(!remember) ? "far" : "fas"} fa-check-square LoginContainer_checkbox`} ></i><label htmlFor="remember-me" style={{cursor: "pointer"}}>Remember Me</label>
        </span>
        );

    }
    
    return (


        <div className="LoginContainer">
            <h1 style={{ fontFamily: "Sans-Serif, FontAwesome" }}>Login</h1>

            <div className="LoginContainer_flex u-space-around">
                <Input placeholder="&#xF0E0;  Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="LoginContainer_input" />
                <div className="LoginContainer_input" style={{position: "relative"}}><Input placeholder="&#xf023;  Password" type={(passwordVisible) ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}  />{renderEye()}</div>
                
                    {checkBox()}
                <Button style={{ marginRight: "2rem", width: "100%" }}>Login</Button>
            </div>
            <div className="LoginContainer_options">
            <div style={{margin: "1rem 0"}}>Forgot Password</div>
            <div>New to Runnerup? <span className="emphasis">Sign Up!</span></div>
            </div>
            
        </div>
    )
}

export default LoginContainer
