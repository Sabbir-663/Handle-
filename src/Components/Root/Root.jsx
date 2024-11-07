import React from 'react';
import { useNavigation } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation = useNavigation;
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            {
            navigation.state === 'loading'?
            <p className='text-6xl font-bold text-red-700'> Loading.....</p> :
            <Outlet></Outlet>
          }
            <Footer></Footer>
        </div>
    );
};

export default Root;