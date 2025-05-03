import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Loading from '../../components/Loading/Loading';
import toast from 'react-hot-toast';
const Register = () => {
  const navigate = useNavigate()
        const {createUser, setUser,loading, setLoading, verificationEmail, logOut} = useContext(AuthContext)
        const handleRegister = e=>{
            e.preventDefault()
            const form  = e.target;
            const email = form.email.value
            const password = form.password.value

            createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setUser(user)
                setLoading(true)
                verificationEmail()
                logOut()
                navigate('/')
                toast.success('Your verification Email Sent Successfully!')
                // ...

              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
              });
        }
        if(loading){
            return <Loading></Loading>
        }
    return (
        <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body py-10">
          <h2 className='text-2xl text-center font-bold'>Login Your Account</h2>
          <fieldset className="fieldset space-y-2">
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" />
            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input" placeholder="photo" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <button type='submit' className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className='font-semibold text-center mt-4'>Don’t Have An Account ? <Link to='/auth/login' className='text-error'>Login</Link></p>
        </form>
      </div>
    );
};

export default Register;