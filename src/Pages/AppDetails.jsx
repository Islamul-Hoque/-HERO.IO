import React, { useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts'

import DownloadIcon from '../../src/assets/icon-downloads.png'
import AppIcon from '../../src/assets/demo-app (1).webp'
import StarIcon from '../../src/assets/icon-ratings.png'
import ReviewIcon from '../../src/assets/icon-review.png'
import useApps from '../Hooks/useApps';
import { loadInstalledApps, saveInstalledApps } from '../Utils/LocalStorage';
import ErrorApp from './ErrorApp';

const AppDetails = () => {
    const { apps, loading, error } = useApps()
    const { id }= useParams()

    const app = apps.find(app => app.id == Number(id));
    const [isInstalled, setIsInstalled] = useState(() =>  loadInstalledApps().some(app => app.id === Number(id)));

    // if (loading) return <p>Loading.......</p>
    if(!app) return <ErrorApp />;
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = app || {}

    return (
        <div className='m-8'>
            <div className='flex flex-row gap-6 items-stretch h-auto'>
                <img className="h-full" src={AppIcon} alt="" />
                <div className='flex-1 flex flex-col justify-between'>
                    <h2 className='text-[1.2rem] font-bold'>{title}</h2>
                    <div className='border-b-1 pb-6 mb-4 border-[#00193133]'>Developed by <span className='text-xl font-bold bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent'>{companyName}</span></div>
                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            <img className='w-[1.5rem]' src={DownloadIcon} alt="" /> 
                            <span className='mt-2 text-[0.8rem]'>Downloads</span>
                            <span className='-mt-2 font-bold text-[2rem]'>{downloads}</span>
                        </div>
                        <div className='flex flex-col'>
                            <img className='w-[1.5rem]' src={StarIcon} alt="" /> 
                            <span className='mt-2 text-[0.8rem]'>Average Ratings</span>
                            <span className='-mt-2 font-bold text-[2rem]'>{ratingAvg}</span>
                        </div>
                        <div className='flex flex-col'>
                            <img className='w-[1.5rem]' src={ReviewIcon} alt="" /> 
                            <span className='mt-2 text-[0.8rem]'>Total Reviews</span>
                            <span className='-mt-2 font-bold text-[2rem]'>{reviews}</span>
                        </div>
                    </div>
                    <button onClick={()=> {
                        saveInstalledApps(app)
                        setIsInstalled(true);
                        toast.success(`"${title}" installed successfully! 🎉`)
                        }} disabled={isInstalled} className={`btn w-fit mt-2 text-white ${ isInstalled ? '!bg-[#00d390] cursor-not-allowed' : 'bg-[#00d390]' }`}>
                        {isInstalled ? 'Installed' : `Install Now (${size} MB)`} </button>
                </div>
            </div>

            {/* Chart */}
            <div className='mt-10 border-t-1 border-b-1 py-4 border-[#00193133]'>
                <h3 className='text-[2rem] font-bold text-[#001931]'>Ratings</h3>
                <div className=' h-80 flex justify-items-start'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={ratings} layout="vertical">
                            {/* <CartesianGrid strokeDasharray='3 3' /> */}
                            <XAxis type="number" axisLine={false} tickLine={false} domain={[0, 'dataMax']}/>
                            <YAxis dataKey="name" type="category" reversed={true} axisLine={false} tickLine={false}/>
                            <Tooltip />
                            {/* <Legend /> */}
                            <Bar dataKey='count' fill='#f97316' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Description */}
            <div className='my-8'>
                <h2 className='font-bold text-[1.5rem] text-[#001931] '>Description</h2>
                <p className='text-[#627382] mt-4'> {description} </p>
            </div>

        </div>
    );
};

export default AppDetails;