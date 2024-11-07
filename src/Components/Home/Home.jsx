import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';


const Home = () => {
    const categories =useLoaderData();
    return (
        <div>
            <Banner></Banner>
       
           <div className='mt-96 w-11/12 mx-auto text-center'>
           <Categories categories={categories}></Categories>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Home;