import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';


const Home = () => {
    const categories =useLoaderData();
    return (
        <div>
            <Banner></Banner>
       
           <div className='mt-80 w-10/12 mx-auto text-center   '>
           <h1 className='text-center font-bold text-4xl mb-6'>Explore Cutting-Edge Gadgets</h1>
           <div className='flex  '>
           <Categories categories={categories}></Categories>
           <Outlet></Outlet>
           </div>
           </div>
        </div>
    );
};

export default Home;