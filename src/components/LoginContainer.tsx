import React, { useState } from 'react'
import Input from './Input';
import '../css/LoginContainer.css'
import '../css/Button.css'
// TODO:
//                 Create some standard button styles
//                 create a secondary, primary and warning button

//                 Style login container

const LoginContainer: React.FunctionComponent = () => {
    const [text, setText] = useState("");
    return (


        <div className="LoginContainer">
            <h1 style={{ fontFamily: "Sans-Serif, FontAwesome"}}>Login</h1>

            <div className="LoginContainer_flex u-space-around">
                <Input placeholder="&#xF0E0;  Email" type="email" value={text} onChange={(e) => setText(e.target.value)} className="LoginContainer_input" />
                <Input placeholder="&#xf023;  Password" type="password" value={text} onChange={(e) => setText(e.target.value)} className="LoginContainer_input" />
                <span style={{alignSelf: "flex-start"}}>
                <input type="checkbox" name="Remember Me" id="remember-me" /> <label htmlFor="remember-me">Remember Me</label>
                </span>
                <button className="Button" style={{ marginRight: "2rem", width: "100%" }}>Login</button>
            </div>
            <div className="LoginContainer_options">
            <div style={{margin: "1rem 0"}}>Forgot Password</div>
            <div>New to Runnerup? <span className="emphasis">Sign Up!</span></div>
            </div>
            
        </div>
    )
}

export default LoginContainer
