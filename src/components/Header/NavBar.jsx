import React from 'react';
import { NavLink } from 'react-router';
import LoginMenu from './LoginMenu';

const NavBar = () => {
    return (
        <div className='flex items-center justify-between mt-5 mb-10'>
            <div></div>
            <div className='flex items-center gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div>
                <LoginMenu></LoginMenu>
            </div>
        </div>
    );
};

export default NavBar;