import { React } from 'react';
import IconLinks from './IconLinks';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <footer className='contact-container'>
            <h2 className='contact-header'>Contact</h2>
            <p>Please get in touch if you think our work could be mutually beneficial!</p>
            <p>Random Town, California 12345</p>
            <div>
                <img src='' alt='' />
                555-555-5555
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