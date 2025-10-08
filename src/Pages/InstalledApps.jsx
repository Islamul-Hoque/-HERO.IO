import React from 'react';
import DownloadIcon from '../../src/assets/icon-downloads.png'
import AppIcon from '../../src/assets/demo-app (1).webp'
import StarIcon from '../../src/assets/icon-ratings.png'

const InstalledApps = () => {
    return (
        <div className='flex mb-3 justify-between items-center'>
            <div className='flex items-center gap-2 '>
                <img className='w-[4rem] rounded-[0.7rem] ' src={AppIcon} alt="" />
                <div>
                    <h2 className='mb-1 font-semibold text-[#001931]'>Forest: Focus for Productivity</h2>
                    <div className='mb-1 gap-4 flex items-center '>
                        <div className=' rounded-[0.4rem]  text-[#00d390] gap-1 flex items-center'>
                            <img className='w-[0.85rem]' src={DownloadIcon}alt="" /> 
                            <span>9M</span>
                        </div>
                        <div className=' rounded-[0.4rem]  text-[#ff8811] gap-1 flex items-center'>
                            <img className='w-[0.85rem]' src={StarIcon}alt="" /> 
                            <span>9M</span>
                        </div>
                        <div className='text-[#627382]'>258 MB</div>
                    </div>            
                </div>
            </div>
            <div>
                <button className="btn bg-[#00d390] text-white ">Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;