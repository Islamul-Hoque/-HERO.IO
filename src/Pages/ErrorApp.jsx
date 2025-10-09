import React from 'react';
import { Link } from 'react-router';
import AppError from '../../src/assets/App-Error.png';

const  ErrorApp = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <div className='flex justify-center items-center'><img className='w-[28%] mt-6 mb-2' src={AppError} alt="" /></div>
                <p className='mb-3 font-bold text-[2.5rem]'>OPPS!! APP NOT FOUND</p>
                <p className='mb-3 text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/' className="btn mb-5 text-white bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]">Go Back!</Link>
            </div>
        </div>
    );
};

export default ErrorApp;