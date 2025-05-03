import React, { useContext } from 'react';
import userIcon from '../../assets/user.png'
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';
const LoginMenu = () => {
    const {user,} = useContext(AuthContext)
    const handleLogOut = ()=>{
        signOut(auth).then(() => {
            console.log('Successfully log out.')
          }).catch((error) => {
           console.log(error)
          });
    }
    return (
        <div className='flex gap-4 items-center'>
            <img src={userIcon} alt="" />
            {
                user ? <button onClick={handleLogOut} className='btn bg-ghost px-10'>Logout</button> : <Link to={'/auth/login'} className='btn bg-ghost px-10'>Login</Link>
            }
            
        </div>
    );
};

export default LoginMenu;