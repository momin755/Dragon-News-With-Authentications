import React from 'react';

const LoginWith = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className='mt-5'>
                <button className='btn w-full text-info mb-3 btn-outline border border-info'>Login With Google</button>
                <button className='btn w-full'>Login With Github</button>
            </div>
        </div>
    );
};

export default LoginWith;