import React from "react";
// import Darek from '../darek.jpg';

const Contact = (props) => (
	<div className="contact-container" id="contact">
		<h2 className="heading-l">Contact</h2>
		<div className="contact-section">
			{/* <img className='self' src={Darek} alt="portrait" /> */}
			<p className="description">
				Available for hire and collaboration. Feel free to contact me any time.
			</p>
			<div className="info-container">
				<div className="info-block">
					<span className="fas fa-phone-square contact-icon"></span>
					<p>(408) 761-3546</p>
				</div>
				<div className="info-block">
					<span className="fas fa-envelope contact-icon"></span>
					<p>Dradmclad@gmail.com</p>
				</div>
				<div className="info-block">
					<span className="fab fa-linkedin contact-icon"></span>
					<a
						className="linkedinUrl"
						href={"https://www.linkedin.com/in/darek-radke-aa26b7173"}
						target={"_blank"}
					>
						Linkedin Profile
					</a>
				</div>
				<div className="info-block">
					<span className="fab fa-github contact-icon"></span>
					<a
						className="githubLink"
						href={"https://github.com/DarekR88"}
						target={"_blank"}
					>
						GitHub Repository
					</a>
				</div>
				<div className="info-block">
					<span className="far fa-file-alt contact-icon"></span>
					<a
						className="resumeLink"
						href={
							"https://docs.google.com/document/d/1TTDGHSQ3X7-rPYgTCTOPXowR440tVdMMNWsc6d52p0k/edit?usp=sharing"
						}
						target={"_blank"}
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Contact;
