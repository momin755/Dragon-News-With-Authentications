import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json').then(res=> res.json())
const AllCategory = () => {
    const categories = use(categoriesPromise)
    return (
        <div>
            <h3 className='font-semibold text-gray-700'>All Category ({categories.length})  
            </h3>
            <div className='mt-5'>
                {
                    categories.map(cat=> <NavLink to={`/newsDetails/${cat.id}`} className={'btn w-full mb-3 '} key={cat.id}>{cat.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default AllCategory;