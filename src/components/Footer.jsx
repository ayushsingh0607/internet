import React from 'react'
import logo from '../assets/logo.png';
import insta from '../assets/instagram.png';
import fb from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] flex justify-evenly items-center p-14 sm:flex sm:flex-col sm:w-full sm:h-full sm:gap-10 sm:p-7'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-col w-[217px] text-left gap-3'>
                <h1 className='text-[#0E2368] text-[18px] font-semibold'>Contact us</h1>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</span>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>example2020@gmail.com</span>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>(904) 443-0343</span>
            </div>
            <div className='flex flex-col w-[217px] text-left gap-3'>
                <h1 className='text-[#0E2368] text-[18px] font-semibold'>More</h1>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>About Us</span>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>Products</span>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>Career</span>
                <span className='text-[#646874] text-[14px] font-[400] leading-[23px]'>Contact Us</span>
            </div>
            <div className='flex flex-col w-[217px] text-left gap-20 sm:items-center sm:justify-center '>
                <div>
                    <h1 className='text-[#0E2368] text-[18px] font-semibold'>Social Links</h1>
                    <div className='flex gap-10'>
                        <img src={insta} alt="insta" />
                        <img src={twitter} alt="twitter" />
                        <img src={fb} alt="fb" />
                    </div>
                </div>
                <span className='text-[#828B9C] text-[14px] font-[400] leading-[25px] '>© 2022 Food Truck Example</span>
            </div>

        </div>
    )
}

export default Footer