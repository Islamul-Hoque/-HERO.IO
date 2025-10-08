import React, { useState } from 'react';
import InstalledApps from './InstalledApps';
import { loadInstalledApps, removeFromInstalledApps } from '../Utils/LocalStorage';

const Installation = () => {
    // if (loading) return <p>Loading.......</p>

    const [installedApps, setInstalledApps] = useState(()=> loadInstalledApps())
    const [sortOrder, setSortOrder] = useState('none')

    if (!installedApps.length) return <p>No Data Available</p>

    const convertedParseDownloads = (d) => {
        if (!d) return 0;
        if (d.endsWith('M')) return parseFloat(d) * 1_000_000;
        if (d.endsWith('B')) return parseFloat(d) * 1_000_000_000;
        return parseFloat(d);
    };

    const sortedApps = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installedApps].sort((a, b) => convertedParseDownloads(a.downloads) - convertedParseDownloads(b.downloads))
        } else if (sortOrder === 'downloads-desc') {
            return [...installedApps].sort((a, b) => convertedParseDownloads(b.downloads) - convertedParseDownloads(a.downloads))
        } else { 
            return installedApps
        }
    })()

    const handleRemove = id => {
    removeFromInstalledApps(id) 
    setInstalledApps(prev => prev.filter(app => app.id !== id)) 
    }

    return (
        <div className='m-8'>
            <h2 className='text-[2.5rem] text-center text-[#001931] font-bold'>Our All Applications</h2>
            <p className='text-[1.1rem] text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className=' flex justify-between py-5 items-center'>
                <h1 className='text-[1.1rem] font-semibold'>{sortedApps.length} Apps Found </h1>
                <label className='form-control w-[10rem] max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value='none'>Sort By Size</option>
                        <option value='downloads-asc'>Low -&gt; High</option>
                        <option value='downloads-desc'>High -&gt; Low</option>
                    </select>
                </label>
            </div>

            <div>
                {
                    sortedApps.map(app => <InstalledApps key={app.id} app={app} handleRemove={handleRemove}/> )
                }
            </div>
        </div>
    );
};

export default Installation;



