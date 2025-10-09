import React from 'react';
import DownloadIcon from '../../src/assets/icon-downloads.png'
import StarIcon from '../../src/assets/icon-ratings.png'
import { toast } from 'react-toastify';

const InstalledApps = ({app, handleRemove}) => {
    const { id, image, title,  downloads, ratingAvg, size, } = app 
    return (
        <div className='flex mb-3 justify-between items-center rounded-[0.7rem] shadow p-4 bg-white'>
            <div className='flex items-center gap-2 '>
                <div className='flex items-center bg-white'><img className='w-[4rem]' src={image} alt="" /></div>
                <div>
                    <h2 className='mb-1 font-semibold text-[#001931]'>{title}</h2>
                    <div className='mb-1 gap-4 flex items-center '>
                        <div className=' rounded-[0.4rem]  text-[#00d390] gap-1 flex items-center'>
                            <img className='w-[0.85rem]' src={DownloadIcon}alt="" /> 
                            <span>{ downloads }</span>
                        </div>
                        <div className=' rounded-[0.4rem]  text-[#ff8811] gap-1 flex items-center'>
                            <img className='w-[0.85rem]' src={StarIcon}alt="" /> 
                            <span>{ratingAvg}</span>
                        </div>
                        <div className='text-[#627382]'>{size} MB</div>
                    </div>            
                </div>
            </div>
            <div>
                <button onClick={()=> {
                    handleRemove(id)
                    toast.info(`"${title}" has been uninstalled successfully! ✅`);
                } } className="btn bg-[#00d390] text-white ">Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps; 