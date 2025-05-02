import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Marquees from '../components/Header/Marquees';
import NavBar from '../components/Header/NavBar';
import LeftAside from '../components/LeftAside/LeftAside';
import RightAside from '../components/RightAside/RightAside';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <header>
            <Header></Header>
            <Marquees></Marquees>
            <NavBar></NavBar>
            </header>
            <main className='grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <LeftAside></LeftAside>
                </aside>
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;