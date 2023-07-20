import { React } from 'react';
import IconLinks from './IconLinks';
import '../styles/About.css'

const About = () => {
    return (
        <header className='about-container'>
            <div>
                <h1 className='name'>Anthony Roncal</h1>
                <p className='title'>Front-end Developer</p>
            </div>
            <div>
                <h2>About</h2>
                <p>
                    Dedicated Quality Engineer with a strong foundation in software testing, now leveraging Technical expertise and problem-solving skills 
                    to pursue a career as a Front-End Developer. Adept at collaborating with cross-functional Agile teams to deliver high-quality solutions, 
                    now applying proficiency in HTML, CSS, and JavaScript to craft engaging and user-friendly web experiences. Eager to contribute 
                    innovative solutions and meticulous attention to detail in the field of front-end development. 
                </p>
                <IconLinks />
            </div>
        </header>
    );
}

export default About;