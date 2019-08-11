import React from 'react';
import Logo from '../newTransparentLogo.png'
import { Link } from "react-scroll";

const Nav = props => (
    <div className='navContainer'>
        <div className='nav'>
            <div className='logo'>
                <img className='dLogo' src={Logo} alt="D logo" />
            </div>
            <div className='navItems'>
                <p className='homeLink'>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >
                        Home
              </Link>
                </p>
                <p className='aboutLink'>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        About
              </Link>
                </p>
                <p className='projectsLink'>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        Projects
              </Link>
                </p>
                <p className='contactLink'>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-125}
                        duration={500}
                    >
                        Contact
              </Link>

                </p>
            </div>
        </div>
    </div>
);

export default Nav;