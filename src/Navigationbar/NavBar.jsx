import React from 'react';
import Logo from '../assets/images/logo.png'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='outerNav'>
            <div className="innerNav">
                <div className="Navleft">
                   <img src={Logo} alt="Logo" /> <h1>Velvet Pour</h1>
                </div>
                <div className="NavRight">
                    <ul>
                        <li>Cocktails</li>
                        <li>About us</li>
                        <li>The art</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
