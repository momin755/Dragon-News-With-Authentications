import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Loading from '../../components/Loading/Loading';
import toast from 'react-hot-toast';

const Login = () => {
  const {logInUser, setUser, setLoading, loading, resetPassword} = useContext(AuthContext)
  const navigate = useNavigate()
  const emailRef = useRef()

  const handleResetPass = () =>{
    const emailName = emailRef.current.value
    resetPassword(emailName)
    toast.success('Send a Email Link in Your Email for reset password')
  }
  const handleLogin = e =>{
    e.preventDefault()
    const form  = e.target;
    const email = form.email.value
    const password = form.password.value

    logInUser(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      toast.success('You are Login Successfully!')
      setLoading(true)
      navigate(`/`)
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
      toast.error(errorMessage)
    });

if(loading){
  return <Loading></Loading>
}
  }
    return (
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body py-10">
        <h2 className='text-2xl text-center font-bold'>Login Your Account</h2>
        <fieldset className="fieldset space-y-2">
        <label className="label">Email</label>
            <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover" onClick={handleResetPass}>Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='font-semibold text-center mt-4'>Don’t Have An Account ? <Link to='/auth/register' className='text-error'>Register</Link></p>
      </form>
    </div>
    );
};

export default Login;