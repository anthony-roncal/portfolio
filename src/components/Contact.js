import { React } from 'react';
import IconLinks from './IconLinks';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <footer className='contact-container'>
            <h2 className='contact-header'>Contact</h2>
            <p>Santa Ana, California 92703</p>
            <div>
                <img src='' alt='' />
                (562)-508-9775
            </div>
            <div>
                <img src='' alt='' />
                anthonycharles.roncal@gmail.com
            </div>
            <IconLinks />
        </footer>
    );
}

export default Contact;