import React from 'react'
import { Link } from 'react-router-dom';
import '../scss/Header.scss';


const Header: React.FunctionComponent = () => {
    return (
        <header className="Header">
           <Link to="/"><div className="Header_text-container"><h1 className="Header_text">Runnerup.io</h1><i className="fas fa-shoe-prints Header_icon"></i></div></Link>
        </header>
    )
}

export default Header
