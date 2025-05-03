import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            this is dashboard
           { user &&  <h2 className="text-3xl font-bold">Welcome, 
            {user.email}</h2> }
        </div>
    );
};

export default Dashboard;