import React, { useState } from 'react'
import '../css/Input.css';
const Input: React.FunctionComponent = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div className={`Input-wrapper ${(focus) ? "Input-focused" : ""}`}>
            <input type="text" onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} className="Input-primary"/>
        </div>
    )
}

export default Input
