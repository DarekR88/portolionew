import React from 'react';

const About = props => (
    <div className='aboutContainer' id='about'>
        <p className='aboutTitle'>About</p>
        <div className='about'>
            <p className='summary'>
                UI/UX developer with a passion for creating dynamic and responsive experiences.
                I enjoy working with and creating APIs and I have experience working with MongoDB and SQL databases.
                Programming full stack applications in javaScript and working with React, Angular, and Vue.js are areas that I excel in.
            </p>
            <p className='backEnd'>
                I am well versed in the methods and technoligies utilized in creating a modern back end. Express, Node.js, MongoDB,
                Mongoose, MySQL, and Sequelize are technologies that I have employed in the development of the projects I have completed.
                I have experience creating APIs from scratch and using third party APIs to deveolop dynamic applications.
            </p>
            <p className='technologies'>
                Learning is a very important part of development. New and exciting technologies are constantly being created.
                Being an excellent developer and programmer hinges on my ability to adapt to new technologies and determine
                what best fits my needs for a particular project.
            </p>
        </div>
    </div>
);

export default About;