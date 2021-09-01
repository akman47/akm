import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from '../../pages/Contact';

import '../../assets/styles/nav.css';

function Nav(){

    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        if (!openMenu) {
            document.getElementById("sidepanel").style.width = "250px";
            setOpenMenu(true);
        }
        else {
            document.getElementById("sidepanel").style.width = "0";
            setOpenMenu(false);
        }
    }

    return (
        <>
        <ul id="sidepanel" className="text-xl font-medium my-7">
        {/* text-xl px-8 font-medium my-5 px-8 h-full w-1/3 */}
            {/* <span className="closebtn" onClick={closeNav}>&times;</span> */}
            <li className="py-2">
                <NavLink exact to='/'
                    activeClassName="navActive"
                    className="navLink"
                    replace>
                    Home
                </NavLink>
            </li>
            <li className="py-3">
                <NavLink exact to='/about'
                    activeClassName="navActive"
                    className="navLink"
                    replace>
                    About
                </NavLink>
            </li>
            <li className="py-3">
                <NavLink exact to='/projects'
                    activeClassName='navActive'
                    className='navLink'
                    replace>
                    Projects
                </NavLink>
            </li>
            <li className='py-4 dropdown'>
                <span className='dropbtn'>Contact</span>
                <Contact />
            </li>
        </ul>
        <button className="openbtn text-right" onClick={toggleMenu}>&#9776;</button>
        <span>{openMenu}</span>
        </>
    )
}

export default Nav;