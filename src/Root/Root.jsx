import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='bg-[#f5f5f5]  mx-auto w-full flex-1 '>
                <Outlet></Outlet>
            </div>
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default Root;