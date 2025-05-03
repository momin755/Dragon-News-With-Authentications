import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import LoginMenu from './LoginMenu';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const NavBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex items-center justify-between mt-5 mb-10'>
            <div>
               {user && <p>{user.email}</p>}
            </div>
            <div className='flex items-center gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
                <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </div>
            <div>
                <LoginMenu></LoginMenu>
            </div>
        </div>
    );
};

export default NavBar;