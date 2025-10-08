import React from 'react'
import { Link } from 'react-router'
import Banner from '../Components/Banner'
import TrustedStats from '../Components/TrustedStats'
import TrendingApps from '../Components/TrendingApps'

import useApps from '../Hooks/useApps'
import LoadingSpinner from './LoadingSpinner'


const Home = () => {
    const { apps, loading, error } = useApps()
    const trendingApps = apps.slice(0, 8)
    if (loading) return <LoadingSpinner />;
    return (
        <div className='bg-[#f5f5f5] text-center'>
            <Banner/>
            <TrustedStats/>

            <div className='m-8'>
                <h2 className='text-[1.5rem] text-center text-[#001931] font-bold'>Trending Apps</h2>
                <p className=' text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid md:grid-cols-4 mt-6 gap-4'>
                    {
                        trendingApps.map( app => <TrendingApps key={app.id} app={app}/>)
                    }
                </div>
            </div>
            <Link to='/apps' className="btn mb-8 text-white bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]">Show All</Link>


            {/* { loading ? ( <SkeletonLoader /> ) : ( 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        featuredProducts.map(product => ( <ProductCard key={product.id} product={product} />))
                    }
            </div>
            )} */}

        </div>
    )
}

export default Home;