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
                    Quality engineer turned front-end developer with a strong drive to learn and grow.
                    Proficient in HTML, CSS, and JavaScript, I'm excited to create engaging and user-friendly web interfaces.
                    Committed to continuous improvement, I embrace challenges and strive to deliver high-quality solutions that exceed expectations.
                </p>
                <IconLinks />
            </div>
        </header>
    );
}

export default About;