import React, { useState } from 'react'
import Input from './Input';
const LoginContainer: React.FunctionComponent = () => {
    const [text, setText] = useState("");
    return (
        <div className="LoginContainer">
            {/* 
            TODO:
                Create some standard button styles
                create a secondary, primary and warning button

                Style login container
            */}
            <Input placeholder="Email" type="email" value={text} onChange={(e) => setText(e.target.value)}/>
            <Input placeholder="Password" type="password" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default LoginContainer
