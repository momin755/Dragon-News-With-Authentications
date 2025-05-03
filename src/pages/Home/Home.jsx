import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return <Navigate to={'/newsDetails/0'}></Navigate>
};

export default Home;