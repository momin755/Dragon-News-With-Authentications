import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';

const AuthPage = () => {
    return (
        <div className='container mx-auto'>
         <header>
            <NavBar></NavBar>
         </header>
         <main className='min-h-screen flex items-center justify-center'>
            <Outlet></Outlet>
         </main>
        </div>
    );
};

export default AuthPage;