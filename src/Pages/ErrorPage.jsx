import React from 'react';
import { Link } from 'react-router';
import Error404 from '../../src/assets/error-404.png';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import LoadingSpinner from './LoadingSpinner';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>

            <div className='text-center my-8'>
                <div className='flex justify-center items-center'><img className='w-[28%] mt-6 mb-2' src={Error404} alt="" /></div>
                <p className='mb-3 font-bold text-[2.5rem]'>Oops, page not found!</p>
                <p className='mb-3 text-[#627382]'>The page you are looking for is not available.</p>
                <Link to='/apps' className="btn text-white bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]">Go Back!</Link>
            </div>

            <Footer/>
        </div>
    );
};

export default ErrorPage;