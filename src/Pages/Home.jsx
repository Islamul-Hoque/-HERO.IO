import React from 'react'
import { Link } from 'react-router'
import Banner from '../Components/Banner'
import TrustedStats from '../Components/TrustedStats'
import TrendingApps from '../Components/TrendingApps'


// import { Link } from 'react-router'

// import useProducts from '../Hooks/useProducts'
// import ProductCard from '../Components/ProductCard'
// import SkeletonLoader from '../Components/SkeletonLoader'

const Home = () => {
    // const { products, loading, error } = useProducts()
    // const featuredProducts = products.slice(0, 6)

    return (
        <div className='bg-[#f5f5f5] text-center'>
            <Banner/>
            <TrustedStats/>

            <div className='m-8'>
                <h2 className='text-[1.5rem] text-center text-[#001931] font-bold'>Trending Apps</h2>
                <p className=' text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid md:grid-cols-4 mt-6'>
                    <TrendingApps/>
                </div>
            </div>
            <Link to='/apps' className="btn mb-8 text-white bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]">Show All</Link>

            {/* <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>Featured Products</h1>
                <Link to='/products' className='btn btn-outline'> See All Products </Link>
            </div>

            { loading ? ( <SkeletonLoader /> ) : ( 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        featuredProducts.map(product => ( <ProductCard key={product.id} product={product} />))
                    }
            </div>
            )} */}
        </div>
    )
}

export default Home