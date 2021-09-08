import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Contact from '../../pages/Contact';
import phoneIcon from '../../assets/icons/phone-white.png';
import emailIcon from '../../assets/icons/email2.png';
// import resumeIcon from '../../assets/icons/resume3.png';

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
        <header className='flex justify-between'>
        <h2 className='p-6 text-3xl'>Angela Man</h2>
        <ul id="sidepanel" className="sidepanel bg-black h-full text-3xl text-center font-bold my-7">
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
            <li className='py-4 dropdown' onClick={toggleMenu}>
                <NavLink exact to='/contact'
                    activeClassName='text-green-400'
                    className='dropbtn'
                    replace>Contact
                </NavLink>
                {/* <Contact /> */}
                <div className="dropdown-content flex flex-row bg-black py-4 w-full text-xs">
                    <a className="text-sm pb-2" href="tel:+12813006033">
                        <img className="contact-img mx-3" src={phoneIcon} alt="phone icon"/>
                        {/* <span className="">281.300.6033</span> */}
                    </a>
                    <a className="text-sm py-1" href="mailto:angela.k.man@gmail.com">
                        <img className="contact-img mx-3" src={emailIcon} alt="email icon" />
                        {/* <span>angela.k.man@gmail.com</span> */}
                    </a>
                </div>
            </li>
        </ul>
        <div className="text-right pt-7">
            <span className="openbtn" onClick={toggleMenu}>&#9776;</span>
        </div>
        </header>
    )
}

export default Nav;