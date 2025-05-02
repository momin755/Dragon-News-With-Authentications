import React from 'react';
import Marquee from "react-fast-marquee";
const Marquees = () => {
    return (
        <div className='flex gap-5 items-center bg-gray-200 p-2 my-2'>
            <p className='px-7 py-2 text-white bg-error'>Latest</p>
            <Marquee className=''>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, labore perferendis! Ex exercitationem, enim mollitia illo non quia consequatur placeat molestias fugiat, dolorem, eligendi quis ab impedit voluptate voluptatibus odio!</p>
            </Marquee>
        </div>
    );
};

export default Marquees;