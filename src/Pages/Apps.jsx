import React from 'react';
import TrendingApps from '../Components/TrendingApps';

const Apps = () => {
    return (
        <div className='m-8 '>
            <h2 className='text-[2.5rem] text-center text-[#001931] font-bold'>Our All Applications</h2>
            {/* <p className='text-[1.1rem] text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className=' flex justify-between py-5 items-center'>
                <h1 className='text-[1.1rem] font-semibold'> (132) Apps Found </h1>

                <label className="input flex items-center gap-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /> </g> </svg>
                    <input type="search" className="outline-none bg-transparent w-full" placeholder="search Apps" required />
                </label>
            </div>

            <div className='grid md:grid-cols-4 mt-3'>
                <TrendingApps/>
            </div> */}
        </div>
    );
};

export default Apps;


{/* <label className='input'> <input  type='search' placeholder='Search Products' /> </label> */}
{/* value={search} onChange={e => setSearch(e.target.value)} */}