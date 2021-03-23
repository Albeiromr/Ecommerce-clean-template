import React from 'react';
import './0px-599px.scss';
import './600px-1024px.scss';
import './1025px-1920px.scss';



const Header = () => {

    return (
        <header className='header'>

            <div className='header__contact-bar'>

                <div className='header__contact-data'>

                    <p className='header__green-text'>Contact us</p>
                    <p className='header__black-text'>+420 336 775 664</p>
                    <p className='header__black-text'>info@freshnesecom.com</p>
                    <div className='header__line'></div>
                    
                </div>

                <div className='header__contact-links'>

                    <p className='header__green-link'>Blog</p>
                    <p className='header__green-link'>About Us</p>
                    <p className='header__green-link'>Shipping Policy</p>
                    
                </div>

            </div>

            <div className='header__logo-bar'></div>

        </header>
    )
};

export default Header;