import React from "react";
import { Link } from "react-scroll";

const Menu = (props) => {
	const { isMenuOpen, toggleMenu } = props;

	return (
		<div className={isMenuOpen ? 'menu expanded' : 'menu'}>
      <div className="x-button-container">
        <button className="x-button" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            x="0"
            y="0"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              strokeMiterlimit="10"
              fontFamily="none"
              fontSize="none"
              fontWeight="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0 172V0h172v172z"></path>
              <path
                fill="#e9e7da"
                d="M35.833 21.5C28 21.5 21.5 28 21.5 35.833v100.334C21.5 144 28 150.5 35.833 150.5h100.334c7.833 0 14.333-6.5 14.333-14.333V35.833C150.5 28 144 21.5 136.167 21.5zm0 14.333h100.334v100.334H35.833zm32.11 21.416a7.167 7.167 0 00-5.36 11.842L76.677 86l-14.096 16.909a7.167 7.167 0 1011.002 9.182L86 97.198l12.416 14.893a7.167 7.167 0 1011.002-9.182L95.322 86l14.096-16.909a7.167 7.167 0 00-5.585-11.842 7.167 7.167 0 00-5.417 2.66L86 74.802 73.584 59.91a7.167 7.167 0 00-5.64-2.66z"
              ></path>
            </g>
          </svg>
        </button>
      </div>

			<ul className="menu-items">
				<li className="menu-item">
					<Link
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={-200}
            duration={500}
					>
						<div onClick={toggleMenu}>Home</div>
					</Link>
				</li>
				<li className="menu-item">
					<Link
						activeClass="active about"
						to="about"
						spy={true}
						smooth={true}
						offset={-150}
            duration={500}
					>
            <div onClick={toggleMenu}>About</div>
					</Link>
				</li>
				<li className="menu-item">
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-50}
            duration={500}
					>
						<div onClick={toggleMenu}>Projects</div>
					</Link>
				</li>
				<li className="menu-item">
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						offset={-125}
            duration={500}
					>
						<div onClick={toggleMenu}>Contact</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
