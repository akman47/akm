import React from 'react';
import phoneIcon from '../../assets/icons/phone-white.png';
import emailIcon from '../../assets/icons/email2.png';
import resumeIcon from '../../assets/icons/resume3.png';

import '../../assets/styles/contact.css';

function Contact() {
    return (
        <section className="dropdown-content py-2 w-full">
            <a className="text-sm flex justify-start" href="tel:+12813006033">
                <img className="contact-img mx-3" src={phoneIcon} alt="phone icon"/>
                <span className="">281.300.6033</span>
            </a>
            <a className="text-sm flex justify-start" href="mailto:angela.k.man@gmail.com">
                <img className="contact-img mx-3" src={emailIcon} alt="email icon" />
                <span>angela.k.man@gmail.com</span>
            </a>
            <a className="text-sm flex justify-start" href="https://drive.google.com/file/d/1ig66QVZOr92mOo0-YWz1qse_Eh5UgeaH/view?usp=sharing" target="_blank">
                <img className="contact-img mx-3" src={resumeIcon} alt="resume icon" />
                <span>Resume</span>
            </a>
        </section>
    )
}

export default Contact;