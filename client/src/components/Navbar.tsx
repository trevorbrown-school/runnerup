import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../scss/Navbar.scss';
import LoginContainer from './LoginContainer';
import Modal from './Modal';

interface NavbarProps {
    children: React.ReactNode;
}

const Navbar: React.FunctionComponent = ({ children }) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const location = useLocation();

    const getRouteClasses = (route: string) => {
        return (location.pathname === route) ? "Navbar_item-current" : "";
    }

    const renderRoutes = () => {
        return (
            <>
                <Link to="/" className={`Navbar_item ${getRouteClasses('/')}`}>Home</Link> 
              <Link to="/workouts" className={`Navbar_item ${getRouteClasses('/workouts')}`}>Workouts</Link> 
              <Link to="/myworkouts" className={`Navbar_item ${getRouteClasses('/myworkouts')}`}>My Workouts</Link> 

                <span className="Navbar_end"><Link to="#" className="Navbar_item">{children}</Link><Link to="/signup" className={`Navbar_item ${getRouteClasses('/signup')}`}>Sign Up</Link></span>
            </>
        );
    }



    return (
        <div className="Navbar">
            <Modal setVisible={setLoginVisible} visible={loginVisible}>
   
                <LoginContainer>{  children }</LoginContainer>
            </Modal>
            {renderRoutes()}
        </div>
    )
}

export default Navbar
