import React from 'react';
import userIcon from '../../assets/user.png'
const LoginMenu = () => {
    return (
        <div className='flex gap-4 items-center'>
            <img src={userIcon} alt="" />
            <button className='btn bg-ghost px-10'>Login</button>
        </div>
    );
};

export default LoginMenu;