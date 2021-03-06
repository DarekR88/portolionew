import React from "react";
import HamburgerButton from "./HamburgerButton";
// import Logo from "../newTransparentLogo.png";
import { Link } from "react-scroll";

const Nav = (props) => {
	const { toggleMenu, scrollDirection } = props;

	return (
		<div className={scrollDirection ? "nav" : "nav hide"}>
			<div className="burger-button">
				<HamburgerButton toggleMenu={toggleMenu} />
			</div>

			<ul className="nav-items">
				<li className="nav-item home">
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
				</li>
				<li className="nav-item">
					<Link
						activeClass="active about"
						to="about"
						spy={true}
						smooth={true}
						offset={-150}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="nav-item projects">
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="nav-item contact">
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
				</li>
			</ul>
		</div>
	);
};

export default Nav;
