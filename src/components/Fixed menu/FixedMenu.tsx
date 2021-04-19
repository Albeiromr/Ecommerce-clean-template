import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";


const FixedMenu = () => {

    return(
        <div className='fixed-menu'>

            <div className='fixed-menu__subcontainer'>

                <div className='fixed-menu__left-block'>

                    <div className='fixed-menu__icon-container'></div>

                    <div className='fixed-menu__line'></div>

                    <div className='fixed-menu__icon-container'></div>

                </div>
                <div className='fixed-menu__middle-block'>

                    <div className='fixed-menu__icon-middle'></div>

                </div>
                <div className='fixed-menu__right-block'>

                    <div className='fixed-menu__icon-container'></div>

                    <div className='fixed-menu__line'></div>

                    <div className='fixed-menu__icon-container-bascket'></div>

                </div>

            </div>

        </div>
    )
};

export default FixedMenu;