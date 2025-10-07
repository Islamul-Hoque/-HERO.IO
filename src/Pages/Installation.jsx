import React from 'react';
import InstalledApps from './InstalledApps';

const Installation = () => {
    return (
        <div className='m-8'>
            <h2 className='text-[2.5rem] text-center text-[#001931] font-bold'>Our All Applications</h2>
            <p className='text-[1.1rem] text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            {/* <div className=' flex justify-between py-5 items-center'>
                <h1 className='text-[1.1rem] font-semibold'> 1 Apps Found </h1>
                <label className='form-control w-[10rem] max-w-xs'>
                    <select className='select select-bordered'>
                        <option value='none'>Sort By Size</option>
                        <option value='price-asc'>Low -&gt; High</option>
                        <option value='price-desc'>High -&gt; Low</option>
                    </select>
                </label>
            </div>

            <div>
                <InstalledApps/>
                <InstalledApps/>
            </div> */}
        </div>
    );
};

export default Installation;

// value={sortOrder}  onChange={e => setSortOrder(e.target.value)}