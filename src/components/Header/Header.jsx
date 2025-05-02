import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='w-[420px] mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-gray-600 font-semibold'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;