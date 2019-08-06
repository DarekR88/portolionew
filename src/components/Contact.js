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
                <p className='info'>
                    Available for hire and collaboration. Feel free to contact me any time.
                </p>

            </div>

        </div>
    </div>
);

export default Contact;