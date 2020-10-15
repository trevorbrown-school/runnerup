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
            <h1>Login</h1>
            <div className="LoginContainer_flex u-space-around">
                <Input placeholder="Email" type="email" value={text} onChange={(e) => setText(e.target.value)} className="LoginContainer_input" />
                <Input placeholder="Password" type="password" value={text} onChange={(e) => setText(e.target.value)} className="LoginContainer_input"  />
                <span><button className="Button">Login</button><button>Sign Up</button></span>
            </div>
            <p style={{fontSize: "1rem",}}>Forgot Password</p>
        </div>
    )
}

export default LoginContainer
