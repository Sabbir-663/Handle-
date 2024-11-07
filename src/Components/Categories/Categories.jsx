import React from 'react';
import { Link } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className='flex flex-col   bg-gray-100 h-max p-8 mr-4 mt-4 rounded-xl'>
            <Link  to="/"><button className='font-medium min-w-full  pr-6 pl-3  py-2 text-lg rounded-full border bg-gray-200 
            mb-3 transition-transform duration-300 hover:scale-105 hover:bg-stone-300'>All Products</button></Link>

            {
                categories.map(category => (<Link key={category.category}
                     to={`/category/${category.category}`}><button className='font-medium min-w-full  pl-3 pr-14 py-2 text-lg rounded-full border bg-gray-200 mb-3 transition-transform duration-300 hover:scale-105 hover:bg-stone-300'>{category.category}</button></Link>))
            }
           
        </div>
    );
};

export default Categories;

