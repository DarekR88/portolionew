import React, { useState, useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Technologies from './components/Technologies';
import Footer from "./components/Footer";
// import MenuBackdrop from './components/MenuBackdrop';
import Menu from "./components/Menu";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true)
	const usePrevious = (value) => {
		const ref = useRef();

		useEffect(() => {
			ref.current = value;
		}, [value]);

		return ref.current;
	};
	const handleScroll = () => {
		const position = window.pageYOffset;
		setSrollPosition(position);
	};

	const previousPosition = usePrevious(scrollPosition);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
	}, []);

	useEffect(() => {
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
    if (scrollPosition > previousPosition) {
      setScrollDirection(false)
    } else if(scrollPosition < previousPosition) {
      setScrollDirection(true)
    }
	}, [scrollPosition]);

	const toggleMenu = (isOpen) => {
		if (!isMenuOpen) {
			setIsMenuOpen(true);
		} else {
			setIsMenuOpen(false);
		}
  };
  

	return (
		<>
			<Nav toggleMenu={toggleMenu} scrollDirection={scrollDirection} />
			<Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<div className="allContainer">
				<Home />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App;
