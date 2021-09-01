import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from '../../pages/Contact';

function Nav(){

    function openNav() {
        document.getElementById("sidepanel").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("sidepanel").style.width = "0";
    }
    return (
        <>
        <div>
        <ul id="sidepanel" className="sidepanel">
        {/* text-xl px-8 font-medium my-5 h-full w-1/3 */}
            <span class="closebtn" onClick={closeNav}>&times;</span>
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
        </div>
        <button class="openbtn" onClick={openNav}>&#9776; Toggle Menu</button>
        </>
    )
}

export default Nav;