import React from 'react';
import TrendingApps from '../Components/TrendingApps';
import useApps from '../Hooks/useApps';
import { useState } from 'react';
import { Link } from 'react-router';
import LoadingSpinner from './LoadingSpinner';
import AppError from '../../src/assets/App-Error.png';

const Apps = () => {
    const [search, setSearch] = useState('')
    const { apps, loading, searchLoading } = useApps(search)

    if (loading) return <LoadingSpinner />;
    return (
        <div className='mx-6 my-8 md:m-8 '>
            <h2 className='text-[2rem] md:text-[2.5rem] text-center text-[#001931] font-bold'>Our All Applications</h2>
            <p className='text-[0.95rem] md:text-[1.1rem] text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className=' flex justify-between py-5 items-center'>
                <h1 className='text-[1.1rem] font-semibold'> ({apps.length}) Apps Found </h1>

                <label className="input w-[12rem] md:w-[20rem] flex items-center gap-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /> </g> </svg>
                    <input value={search} onChange={e => setSearch(e.target.value)} type="search" className="outline-none bg-transparent w-full" placeholder="search Apps" required />
                </label>
            </div>

            <div className='grid md:grid-cols-4 gap-4 mt-3 min-h-[200px]'>
                {searchLoading ? ( <div className='col-span-4 flex justify-center items-center'>
                                <LoadingSpinner />
                            </div>) 
                        : 
                        apps.length > 0 ? (  apps.map((app) => <TrendingApps key={app.id} app={app} />) )
                            : ( <div className='col-span-4 text-center'>
                                    <div className='flex justify-center items-center'><img className='w-[16rem] md:w-[28%] mt-6 mb-2' src={AppError} alt="" /></div>
                                    <p className=' font-bold text-[2.5rem]'>No App Found</p>
                                    <p className='mb-1 mt-1 text-[1.1rem] text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                                    <Link to='/' className='btn mb-8 mt-4 text-white bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]'> Go Home </Link>
                                </div>
                )}
            </div>

        </div>
    );
};

export default Apps;