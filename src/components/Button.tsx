import React from 'react'
import '../css/Button.css';
interface ButtonProps {
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({className, style, onClick, children}) => {
    return (
      <button className={`Button ${className}`} onClick={onClick} style={style}>{children}</button>
    )
}

export default Button
