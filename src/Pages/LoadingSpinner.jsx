import React from 'react';
import logo from '../../src/assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center my-20'>
            <div className='flex items-center font-bold text-[2rem] md:text-[5rem] text-center tracking-[0.5rem] md:tracking-[1rem] '>
                <span className='mr-1'>L</span> 
                <div className=''><img className='animate-spin w-[2rem] md:w-[5rem]' src={logo} alt="" /></div> 
                <span className='ml-2 md:ml-4'>ADING...</span> 
            </div>
        </div>
    );
};

export default LoadingSpinner;