import React from 'react';
import AngularLogo from '../angularlogo.png';
import CssLogo from '../csslogo.png';
import ExpressLogo from '../expresslogo.png';
import HtmlLogo from '../htmllogo.png';
import MysqlLogo from '../images.png';
import JavascriptLogo from '../jslogo.png';
import MongoLogo from '../mongologo.png';
import MongooseLogo from '../mongooselogo.png';
import Nodelogo from '../nodelogo.png';
import ReactLogo from '../reactlogo.png';
import SassLogo from '../sasslogo.png';
import SequelizeLogo from '../sequelizelogo.png';
import VueLogo from '../vuelogo.png';
import BootstrapLogo from '../bootstraplogo.png';
import ReduxLogo from '../redux.png';
import MaterialuiLogo from '../materialui.png';

const About = props => (
    <div className='aboutContainer'>
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
        <div className='systems'>
            <img className='logoImage' src={HtmlLogo} alt="html logo" />
            <img className='logoImage' src={CssLogo} alt="css logo" />
            <img className='logoImage' id='jsLogo' src={JavascriptLogo} alt="js logo" />
            <img className='logoImage' id='nodeLogo' src={Nodelogo} alt="node logo" />
            <img className='logoImage' id='expressLogo' src={ExpressLogo} alt="express logo" />
            <img className='logoImage' id='mysqlLogo' src={MysqlLogo} alt="mysql logo" />
            <img className='logoImage' id='sequelizeLogo' src={SequelizeLogo} alt="sequelize logo" />
            <img className='logoImage' id='mongodbLogo' src={MongoLogo} alt="mongo logo" />
            <img className='logoImage' id='mongooseLogo' src={MongooseLogo} alt="mongoose logo" />
            <img className='logoImage' id='materialuiLogo' src={MaterialuiLogo} alt="materialui logo" />
            <img className='logoImage' id='sassLogo' src={SassLogo} alt="sass logo" />
            <img className='logoImage' id='bootstrapLogo' src={BootstrapLogo} alt="bootstrap logo" />
            <img className='logoImage' src={ReactLogo} alt="react logo" />
            <img className='logoImage' id='reduxLogo' src={ReduxLogo} alt="redux logo" />
            <img className='logoImage' id='angularLogo' src={AngularLogo} alt="angular logo" />
            <img className='logoImage' id='vueLogo' src={VueLogo} alt="vue logo" />
        </div>
    </div>
);

export default About;