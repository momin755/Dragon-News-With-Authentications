import React from 'react';
import swimming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playground from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const QZone = () => {
    return (
        <>
        <div className='mt-5 bg-[#F3F3F3] p-3 mb-5'>
            <h2 className='font-bold'>Q-Zone</h2>
            <div className=''> 
                <img src={swimming} alt="" />
                <img src={classImg} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
        
        <img src={bg} alt="" />
        </>
    );
};

export default QZone;