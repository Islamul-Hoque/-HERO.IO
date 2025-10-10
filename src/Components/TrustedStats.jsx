import React from 'react';

const TrustedStats = () => {
    return (
        <div className='px-6 py-8 md:p-8 text-white text-center bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]'>
            <h2 className='text-[1.4rem] md:text-[1.7rem] font-bold'>Trusted by Millions, Built for You</h2>

            <div className='mt-4 flex justify-center gap-[1rem] md:gap-[4rem] items-center'>
                <div className='flex flex-col'>
                    <h3 className='text-[0.8rem]'>Total Downloads</h3>
                    <span className='text-[2rem] md:text-[2.5rem] font-bold '>29.6M</span>
                    <span className='text-[0.8rem]'>21% more than last month</span>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[0.8rem]'>Total Reviews</h3>
                    <span className='text-[2rem] md:text-[2.5rem] font-bold '>906K</span>
                    <span className='text-[0.8rem]'>46% more than last month</span>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[0.8rem]'>Active Apps</h3>
                    <span className='text-[2rem] md:text-[2.5rem] font-bold '>132+</span>
                    <span className='text-[0.8rem]'>31 more will Launch</span>
                </div>
            </div>

        </div>
    );
};

export default TrustedStats;