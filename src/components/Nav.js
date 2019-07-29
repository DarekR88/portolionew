import React from 'react';
import Logo from '../newTransparentLogo.png'

const Nav = props => (
    <div className='navContainer'>
        <div className='nav'>
            <div className='logo'>
                <img className='dLogo' src={Logo} alt="D logo" />
            </div>
            <div className='navItems'>
                <p className='homeLink'>Home</p>
                <p className='aboutLink'>About</p>
                <p className='projectsLink'>Projects</p>
                <p className='contactLink'>Contact</p>
            </div>
        </div>
    </div>
);

export default Nav;