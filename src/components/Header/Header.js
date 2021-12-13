import React from 'react';
import logo from '../../images/logo.png'

import './Header.css'

const Header = () => {
    return (
        <div className = "div">
            <h1>Hi  I am Header </h1>
            <img src ={logo} alt = ''/>
            
            <nav className = ''>
            <a href="/shop">Shop</a>
            <a href="/oder">oder</a>
            <a href="/manage">manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;