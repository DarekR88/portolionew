import React from 'react';
import Darek from '../darek.jpg';

const Contact = props => (
    <div className='contactContainer' id='contact'>
        <div className='contact'>
            <p className='contactHeader'>
                Contact
            </p>
            <div className='contactSection'>
                <img className='self' src={Darek} alt="portrait" />
                <div className='infoContainer'>
                    <p className='info'>
                        Available for hire and collaboration. Feel free to contact me any time.
                </p>
                    <p>
                        <span className='fas fa-phone-square' id='phoneIcon'></span>
                        (408) 761-3546
                </p>
                    <p>
                        <span className='fas fa-envelope' id='mailIcon'></span>
                        Dradmclad@gmail.com
                </p>
                    <p>
                        <span className='fab fa-linkedin' id='linkedinIcon'></span>
                        <a className='linkedinUrl' href={'https://www.linkedin.com/in/darek-radke-aa26b7173'} target={'_blank'}>
                            Linkedin Profile
                    </a>
                    </p>
                    <p>
                        <span className='fab fa-github' id='githubIcon'></span>
                        <a className='githubLink' href={'https://github.com/DarekR88'} target={'_blank'}>
                            GitHub Repository
                        </a>
                    </p>
                    <p>
                        <span className='far fa-file-alt' id='fileIcon'></span>
                        <a className='resumeLink' href={'https://docs.google.com/document/d/1rnKLGv9Pz8hbtlZFnhmpjAVmRgtdeURjkIdtgBEY_b4/edit?usp=sharing'} target={'_blank'}>
                            Resume
                        </a>
                    </p>
                </div>

            </div>

        </div>
    </div>
);

export default Contact;