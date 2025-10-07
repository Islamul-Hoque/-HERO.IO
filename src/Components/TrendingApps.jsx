import React from 'react';

import DownloadIcon from '../../src/assets/icon-downloads.png'
import AppIcon from '../../src/assets/demo-app (1).webp'
import StarIcon from '../../src/assets/icon-ratings.png'

const TrendingApps = () => {
    return (
        <div className='p-4 bg-white rounded-[0.6rem]'>
            <img className='w-full rounded-[0.7rem]' src={AppIcon} alt="" />
            <div>
                <h3 className='mt-3 mb-2'>Forest: Focus for Productivity</h3>
                <div className='flex justify-between items-center '>
                    <div className=' rounded-[0.4rem] px-2 bg-[#e6f8d0] text-[#00d390] gap-2 flex items-center'>
                        <img className='w-[0.85rem]' src={DownloadIcon}alt="" /> 
                        <span>9M</span>
                    </div>
                    <div className=' rounded-[0.4rem] px-2 bg-[#fff0e1] text-[#ff8811] gap-2 flex items-center'>
                        <img className='w-[0.85rem]' src={StarIcon}alt="" /> 
                        <span>9M</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;