import { React } from 'react';
import '../styles/ProjectCard.css'
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

const ProjectCard = ({ name, github, link, description, image }) => {
    return (
        <div className='project-card'>
            <img src={`/images/${image}_screenshot.png`} alt={`screenshot of ${image} app`} className='project-img' />
            <div className='project-header'>
                <h3>{name}</h3>
                <div className='project-links'>
                    <a href={github} target="_blank" rel="noreferrer" className='project-link'>
                        <i className="devicon-github-original"></i>
                    </a>
                    <a href={link} target="_blank" rel="noreferrer" className='project-link'>
                        <Icon path={mdiOpenInNew} size={1} />
                    </a>
                </div>
            </div>
            <p className='project-description'>{description}</p>
        </div>
    );
}

export default ProjectCard;