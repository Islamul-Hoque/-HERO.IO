import React, { useState } from 'react';
import InstalledApps from './InstalledApps';
import AppDetails from './AppDetails';
import useApps from '../Hooks/useApps';

const Installation = () => {
    // const { apps, loading, error } = useApps()
    // const app = apps.find(app => app.id == Number(id));
    // if (loading) return <p>Loading.......</p>
    // const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = apps

    const [installedApps, setInstalledApps] = useState()
    const [sortOrder, setSortOrder] = useState('none')

    // if (!installedApps.length) return <p>No Data Available</p>

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installedApps].sort((a, b) => a.price - b.price)
        } else if (sortOrder === 'downloads-desc') {
            return [...installedApps].sort((a, b) => b.price - a.price)
        } else { 
            return installedApps
        }
    })()

    // const handleRemove = id => {
    // removeFromWishlist(id) // remove from localstorage
    // setWishlist(prev => prev.filter(p => p.id !== id)) // for ui instant update
    // }


    return (
        <div className='m-8'>
            <h2 className='text-[2.5rem] text-center text-[#001931] font-bold'>Our All Applications</h2>
            <p className='text-[1.1rem] text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className=' flex justify-between py-5 items-center'>
                <h1 className='text-[1.1rem] font-semibold'> 1 Apps Found </h1>
                <label className='form-control w-[10rem] max-w-xs'>
                    <select className='select select-bordered '>
                        <option value='none'>Sort By Size</option>
                        <option value='downloads-asc'>Low -&gt; High</option>
                        <option value='downloads-desc'>High -&gt; Low</option>
                    </select>
                </label>
            </div>

            <div>
                {/* <InstalledApps/> */}
                {/* <InstalledApps/> */}
            </div>
        </div>
    );
};

export default Installation;

// value={sortOrder}  onChange={e => setSortOrder(e.target.value)}



