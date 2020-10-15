import React, { useState } from 'react'
import '../css/Input.css';

interface InputProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: string

}

const Input: React.FunctionComponent<InputProps> = ({placeholder, type, value, onChange}) => {
    const [focus, setFocus] = useState(false);
    return (
        <div className={`Input-wrapper ${(focus) ? "Input-focused" : ""}`}>
            <input
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={type || "text"}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                className="Input-primary" />
        </div>
    )
}

export default Input
