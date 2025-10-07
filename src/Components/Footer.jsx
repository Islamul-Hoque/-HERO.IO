import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/logo.png'

import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
    return (
        <footer className=' bg-[#001931] p-10'>
            <div className='flex justify-between items-start text-white'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[2rem]' src={Logo} alt="Logo" />
                    <h2 className='font-bold'>HERO.IO</h2>
                </div>

                <div>
                    <h2 className='mb-2 font-semibold'>Social Links</h2>
                    <div className='flex items-center gap-2'>
                        <RiTwitterXFill  className='bg-white p-[1px] text-black rounded-full' />  
                        <TiSocialLinkedin className='bg-white text-black rounded-full'/> 
                        <BsFacebook />
                    </div>
                </div>
            </div>

            <p className='border-t-1 mt-5 pt-3 border-t-[#e5e7eb4a] text-white text-center'>Copyright © 2025 - All right reserved</p>
        </footer>
    )
}

export default Footer