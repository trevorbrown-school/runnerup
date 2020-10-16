import React from 'react'
import '../css/Navbar.css';

const Navbar: React.FunctionComponent = () => {

    const renderRoutes = () => {
        return (
            <>
              <button className="Navbar_item Navbar_item-current">Home</button>  
              
                
                
                
                <span className="Navbar_end"><button className="Navbar_item">Login</button><button className="Navbar_item">Sign Up</button></span>
            </>
        );
    }



    return (
        <div className="Navbar">
            {renderRoutes()}
        </div>
    )
}

export default Navbar
