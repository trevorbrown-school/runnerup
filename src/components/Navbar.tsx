import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss';
import LoginContainer from './LoginContainer';
import Modal from './Modal';

const Navbar: React.FunctionComponent = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    const renderRoutes = () => {
        return (
            <>
              <Link to="/" className="Navbar_item Navbar_item-current">Home</Link>  
                <span className="Navbar_end"><button className="Navbar_item" onClick={() => setLoginVisible(true)}>Login</button><button className="Navbar_item">Sign Up</button></span>
            </>
        );
    }



    return (
        <div className="Navbar">
            <Modal setVisible={setLoginVisible} visible={loginVisible}><LoginContainer /></Modal>
            {renderRoutes()}
        </div>
    )
}

export default Navbar
