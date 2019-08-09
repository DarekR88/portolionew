import React from 'react';
import GamejamImage from '../gameJam.PNG';
import Scraper from '../scrape.PNG';
import Hair from '../hair.PNG';
import HerokuIcon from '../heroku-icon-27.jpg'

const Projects = props => (
    <div className='projectsContainer' id='projects'>
        <div className='projects'>
            <p className='projectHeader'>Projects</p>
            <div className='bestProject'>
                <div className='projectButtons'>
                    <img className='projectImage' src={Hair} alt="Hair screenshot" />
                    <div className='projectLinks'>
                        <a className='deployedLink' href={'https://docs.google.com/document/d/1rnKLGv9Pz8hbtlZFnhmpjAVmRgtdeURjkIdtgBEY_b4/edit?usp=sharing'} target={'_blank'}>
                            <span><img className='herokuIcon' src={HerokuIcon} alt='herokuIcon'></img></span>
                            Deployed Link
                        </a>
                        <a className='githubLink' href={'https://github.com/Emilykradke/hair-salon-julie'} target={'_blank'}>
                            <span className='fab fa-github' id='githubIcon'></span>
                            GitHub Link
                        </a>
                    </div>
                </div>
                <div className='bestProjectDescription'>
                    <p className='projectTitle'>
                        Hair by Julie G
                    </p>
                    <p className='projectBlurb'>
                        This is a freelance project for a hairstylist.
                    </p>
                    <ul>
                        <li>
                            Custom, fully mobile responsive front end created with React, Sass, JSX, and Javascript.
                        </li>
                        <li>
                            MongoDB, and Mongoose database allows an administrator to customize hours, services,
                            contact information, and location.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='divider'></div>
            <div className='projectOne'>
                <div className='projectButtons'>
                    <img className='projectImage' src={GamejamImage} alt="gamejam screenshot" />
                    <div className='projectLinks'>
                        <a className='deployedLink' href={'https://game-jam2019.herokuapp.com/'} target={'_blank'}>
                            <span><img className='herokuIcon' src={HerokuIcon} alt='herokuIcon'></img></span>
                            Deployed Link
                        </a>
                        <a className='githubLink' href={'https://github.com/lydmgem/Project2'} target={'_blank'}>
                            <span className='fab fa-github' id='githubIcon'></span>
                            GitHub Link
                        </a>
                    </div>

                </div>
                <div className='projectOneDescription'>
                    <p className='projectTitle'>
                        Game Jam
                    </p>
                    <p className='projectBlurb'>
                        Game Jam is an arcade style website that allows users to play minigames and post their high
                        scores to a leaderboard.
                    </p>
                    <ul>
                        <li>
                            The front end of this website was created with HTML, CSS, and JQuery.
                        </li>
                        <li>
                            The back end utilizes a MySQL database and Sequelize to store the high scores of the users.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='divider'></div>
            <div className='projectTwo'>
                <div className='projectButtons'>
                    <img className='projectImage' src={Scraper} alt="mongo scraper screenshot" />
                    <div className='projectLinks'>
                        <a className='deployedLink' href={'https://mysterious-woodland-91607.herokuapp.com/'} target={'_blank'}>
                            <span><img className='herokuIcon' src={HerokuIcon} alt='herokuIcon'></img></span>
                            Deployed Link
                        </a>
                        <a className='githubLink' href={'https://github.com/DarekR88/ScrapeToMongo'} target={'_blank'}>
                            <span className='fab fa-github' id='githubIcon'></span>
                            GitHub Link
                        </a>
                    </div>
                </div>
                <div className='projectTwoDescription'>
                    <p className='projectTitle'>
                        Web Scraper With Mongo Database
                    </p>
                    <p className='projectBlurb'>
                        This website scrapes another website for information and allows users to save that information
                        and add or remove comments from the saved information.
                    </p>
                    <ul>
                        <li>
                            Fully custom front end constructed with HTML, CSS, JavaScript, and JQuery.
                        </li>
                        <li>
                            Node, Express, Axios, Mongoose, and Cheerio back end with a MongoDB database.
                            Users can save articles that interest them and also save notes to them.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Projects;