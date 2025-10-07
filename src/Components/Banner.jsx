import React from 'react';
import { Link } from 'react-router';
import hero from '../../src/assets/hero.png'
import GooglePlay from '../../src/assets/googlePlay.png'
import AppStore from '../../src/assets/AppStore.png'

const Banner = () => {
    return (
        <div>
            <h2 className=' leading-14 mb-3 text-center font-bold text-[3rem] text-[#001931]  '>We Build <br /> <span className='bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='text-[#627382] text-center mx-auto w-[70%] '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center items-center gap-3 my-5 '>
                <Link to='https://play.google.com/store/games?hl=en'> <button className='btn py-[1.5rem]'> <img src={GooglePlay} alt="" />Google Play </button></Link>
                <Link to='https://www.apple.com/app-store/'> <button className='btn py-[1.5rem]'> <img src={AppStore} alt="" />App Store </button></Link>
            </div>

            <div className='flex justify-center items-center'><img src={hero} alt="" /></div>
        </div>
    );
};

export default Banner;