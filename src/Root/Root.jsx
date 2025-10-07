import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';


const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='bg-[#f5f5f5] max-w-screen-xl mx-auto w-full flex-1 '>
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;

// px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12