import React, { useState } from 'react'
import '../css/Input.css';
const Input: React.FunctionComponent = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div className={`input-wrapper ${(focus) ? "focused" : ""}`}>
            <input type="text" onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} className="input-primary"/>
        </div>
    )
}

export default Input
