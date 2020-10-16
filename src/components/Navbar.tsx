import React from 'react'
import '../css/Navbar.css';

const Navbar: React.FunctionComponent = () => {

    const renderRoutes = () => {
        return (
            <>
              <button className="Navbar_item Navbar_item-current">Home</button>  
              <button className="Navbar_item">Home</button>  
              <button className="Navbar_item">Home</button>  
              <button className="Navbar_item">Home</button>  
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
