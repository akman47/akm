import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from '../../pages/Contact';
import phoneIcon from '../../assets/icons/phone-white.png';
import emailIcon from '../../assets/icons/email2.png';
import resumeIcon from '../../assets/icons/resume3.png';

import '../../assets/styles/nav.css';

function Nav(){

    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        if (!openMenu) {
            document.getElementById("sidepanel").style.width = "180px";
            setOpenMenu(true);
        }
        else {
            document.getElementById("sidepanel").style.width = "0";
            setOpenMenu(false);
        }
    }

    return (
        <>
        <ul id="sidepanel" className="sidepanel bg-black h-full text-xl text-center font-medium my-7">
        {/* text-xl px-8 font-medium my-5 px-8 w-1/3 */}
            <li className="mt-6 py-3" onClick={toggleMenu}>
                <NavLink exact to='/'
                    activeClassName="text-green-300"
                    className="navLink"
                    replace>
                    Home
                </NavLink>
            </li>
            <li className="py-3" onClick={toggleMenu}>
                <NavLink exact to='/about'
                    activeClassName="text-green-400"
                    className="navLink"
                    replace>
                    About
                </NavLink>
            </li>
            <li className="py-3" onClick={toggleMenu}>
                <NavLink exact to='/projects'
                    activeClassName='text-green-400'
                    className='navLink'
                    replace>
                    Projects
                </NavLink>
            </li>
            <li className='py-4 dropdown'>
                <NavLink exact to='/contact'
                    activeClassName='text-green-400'
                    className='dropbtn'
                    replace>Contact
                </NavLink>
                {/* <Contact /> */}
                <section className="dropdown-content flex flex-row bg-black py-4 w-full text-xs">
            <a className="text-sm" href="tel:+12813006033">
                <img className="contact-img mx-3" src={phoneIcon} alt="phone icon"/>
                {/* <span className="">281.300.6033</span> */}
            </a>
            <a className="text-sm" href="mailto:angela.k.man@gmail.com">
                <img className="contact-img mx-3" src={emailIcon} alt="email icon" />
                {/* <span>angela.k.man@gmail.com</span> */}
            </a>
            {/* <a className="text-sm" href="https://drive.google.com/file/d/1ig66QVZOr92mOo0-YWz1qse_Eh5UgeaH/view?usp=sharing" target="_blank" rel="noreferrer"> */}
                {/* <img className="contact-img mx-3" src={resumeIcon} alt="resume icon" /> */}
                {/* <span>Resume</span> */}
            {/* </a> */}
        </section>
            </li>
        </ul>
        <div className="text-right pt-7">
            <span className="openbtn" onClick={toggleMenu}>&#9776;</span>
        </div>
        </>
    )
}

export default Nav;