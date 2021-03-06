import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import phoneIcon from '../../assets/icons/phone-white.png';
import emailIcon from '../../assets/icons/email2.png';
import resumeIcon from '../../assets/icons/resume3.png';
import emailjs from 'emailjs-com';

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

        emailjs.sendForm('service_j7tzqqs', 'template_tu05euo', e.target, 'user_7QKKGJifLAnnXb3dy14nn')
            .then(result => {
                console.log('success!', result.text);
                setErrorMessage('Message Sent!');
            }, error => {
                console.log('failed!', error.text);
                setErrorMessage('Message failed to send. Please try again.')
            });

        setFormState({
            name: '',
            email: '',
            message: ''
        });
    }
    
    return (
        <section id='contact' className="bg-black py-5 w-full flex flex-col items-center">
            <div className='pb-8'>
                <span className='font-medium text-2xl ml-10 contact-headers'>Let's Connect!</span>
                <a className="text-sm flex justify-start items-center py-3 pt-6" href="tel:+12813006033">
                    <img className="contact-img mx-3" src={phoneIcon} alt="phone icon"/>
                    <span className="">281.300.6033</span>
                </a>
                <a className="text-sm flex justify-start items-center py-3" href="mailto:angela.k.man@gmail.com" target='_blank' rel='noreferrer'>
                    <img className="contact-img mx-3" src={emailIcon} alt="email icon" />
                    <span>angela.k.man@gmail.com</span>
                </a>
                <a className="text-sm flex justify-start items-center py-3" href="https://drive.google.com/file/d/1O2tkDa1IxktJnu1sQW2DH8qMq2yGAdUT/view?usp=sharing" target="_blank" rel="noreferrer">
                    <img className="contact-img mx-3" src={resumeIcon} alt="resume icon" />
                    <span>Resume</span>
                </a>
            </div>
            
            <form className="items-center flex flex-col w-full py-5" onSubmit={handleSubmit}>
                <h4 className='font-medium text-xl contact-headers'>Leave a message</h4>
                <input type="text" name="name" placeholder="Name" className="mt-3 border-2 p-2 rounded w-4/5 md:w-1/3 text-black" defaultValue={name} onBlur={handleChange} />
                <input type="text" name="email" placeholder="Email" className="mt-3 border-2 p-2 rounded w-4/5 md:w-1/3 text-black" defaultValue={email} onBlur={handleChange} />
                <textarea name="message" rows="5" placeholder="Message" className="mt-3 border-2 p-2 rounded w-4/5 md:w-1/3 text-black" defaultValue={message} onBlur={handleChange} />
                {errorMessage && (
                    <div className='text-red-600 py-2'>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="mt-4 border-2 rounded-xl px-6 md: px-3 py-1 hover:bg-gray-100 hover:text-black" type="submit">Submit</button>
            </form>
        </section>

    )
}

export default Contact;