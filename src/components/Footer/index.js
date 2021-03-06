import React from 'react';
import facebookLogo from '../../assets/icons/fb-logo.png';
import linkedinLogo from '../../assets/icons/link-white.png';
import instagramLogo from '../../assets/icons/instagram-logo.png';
import githubLogo from '../../assets/icons/GitHub-Mark-Light-32px.png';
import '../../assets/styles/footer.css';

function Footer() {
    return (
        <footer className="mt-24 sm:mt-0 p-6 flex items-center w-full h-20">
            <a href="https://linkedin.com/in/angela-man/" target="_blank" rel="noreferrer" className="mx-3"><img src={linkedinLogo} alt="linked in logo" /></a>
            <a href="https://github.com/akman47" target="_blank" rel="noreferrer" className="mx-3"><img src={githubLogo} alt="github logo" /></a>
            <a href="https://instagram.com/superangieman" target="_blank" rel="noreferrer" className="mx-3"><img src={instagramLogo} alt="instagram logo" /></a>
            <a href="https://facebook.com/superangieman" target="_blank" rel="noreferrer" className="mx-3"><img src={facebookLogo} alt="facebook logo" /></a>
        </footer>
    )
}

export default Footer;