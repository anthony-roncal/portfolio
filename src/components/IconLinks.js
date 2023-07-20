import { React } from 'react';
import '../styles/IconLinks.css'

const IconLinks = () => {
    return (
        <div className='icon-links'>
            <a href="https://github.com/anthony-roncal" target="_blank" rel="noreferrer">
                <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/anthony-roncal/" target="_blank" rel="noreferrer">
                <i className="devicon-linkedin-plain"></i>
            </a>
        </div>
    );
}

export default IconLinks;