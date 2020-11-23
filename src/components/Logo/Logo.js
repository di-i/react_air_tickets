import React from 'react';
import classes from'./logo.module.css';
import logo from './Logo.svg';

function Logo() {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className={classes.logoWrapper}>
                    <img src={logo} className='logo' alt='Logo' />
                </div>
            </div>
        </div>
    );
}

export default Logo;