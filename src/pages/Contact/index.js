import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import phoneIcon from '../../assets/icons/phone-white.png';
import emailIcon from '../../assets/icons/email2.png';
import resumeIcon from '../../assets/icons/resume3.png';

import '../../assets/styles/contact.css';

function Contact() {
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState(
                { 
                    ...formState, 
                    [e.target.name]: e.target.value 
                }
            );
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        setFormState({
            name: '',
            email: '',
            message: ''
        });
    }
    
    return (
        <section className="bg-black py-5 w-full flex flex-col items-center">
            <div className='pb-8'>
                <span className='font-medium text-xl ml-10'>Contact Me</span>
                <a className="text-sm flex justify-start items-center py-3 pt-4" href="tel:+12813006033">
                    <img className="contact-img mx-3" src={phoneIcon} alt="phone icon"/>
                    <span className="">281.300.6033</span>
                </a>
                <a className="text-sm flex justify-start items-center py-3" href="mailto:angela.k.man@gmail.com">
                    <img className="contact-img mx-3" src={emailIcon} alt="email icon" />
                    <span>angela.k.man@gmail.com</span>
                </a>
                <a className="text-sm flex justify-start items-center py-3" href="https://drive.google.com/file/d/1ig66QVZOr92mOo0-YWz1qse_Eh5UgeaH/view?usp=sharing" target="_blank" rel="noreferrer">
                    <img className="contact-img mx-3" src={resumeIcon} alt="resume icon" />
                    <span>Resume</span>
                </a>
            </div>
            
            <form className="items-center flex flex-col w-full py-5" onSubmit={handleSubmit}>
            <h4 className='font-medium text-xl'>Leave a message</h4>
                <input type="text" name="name" placeholder="Name" className="mt-3 border-2 p-2 rounded w-1/3" defaultValue={name} onBlur={handleChange} />
                <input type="text" name="email" placeholder="Email" className="mt-3 border-2 p-2 rounded w-1/3" defaultValue={email} onBlur={handleChange} />
                <textarea name="message" rows="5" placeholder="Message" className="mt-3 border-2 p-2 rounded w-1/3" defaultValue={message} onBlur={handleChange} />
            {/* {errorMessage && (
                <div className='text-red-600'>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )} */}
            <button className="mt-4 border-2 rounded-xl px-3 py-1 hover:bg-gray-100 hover:text-black" type="submit">Submit</button>
        </form>
        {/* <div className="contact-info">
            <h4>Contact Information</h4>
            <div>
                Phone: <a href="tel:+19176987037">917-698-7037</a><br />
                Email: <a href="mailto:joseph@gmail.com">joseph@gmail.com</a><br />
                Location: Houston, TX USA
            </div>
        </div>   */}
        </section>

    )
}

export default Contact;