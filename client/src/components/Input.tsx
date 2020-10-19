import React, { useState } from 'react'
// import '../scss/Input.scss';
import '../scss/Input.scss';
interface InputProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    className?: string;
    style?: React.CSSProperties

}

const Input: React.FunctionComponent<InputProps> = ({placeholder, type, value, onChange, className, style}) => {
    const [focus, setFocus] = useState(false);
    //TODO: add in hooks for changing the size via additional classes
    return (
        <div className={`Input-wrapper ${(focus) ? "Input-focused" : ""}  ${(className) ? className : ''}`}>
            <input
                 style={{...style, fontFamily: "Sans-Serif, FontAwesome"}}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={type || "text"}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                className={`Input-primary ${className}`}/>
        </div>
    )
}

export default Input
