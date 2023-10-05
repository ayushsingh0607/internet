import React, { useState } from 'react'
import logo from '../assets/logo.png'
import back1 from '../assets/Vector 1.png'
import back from '../assets/back.png'
import image from '../assets/girl.png'
import card from '../assets/card.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Footer from '../components/Footer'


const Home = () => {

    const [currentCard, setCurrentCard] = useState(0)

    const data = [
        { id: 1, img: card, title: 'Grilled  Tomatoes at Home', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard...' },
        { id: 2, img: card1, title: 'Snacks for Travel', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard...' },
        { id: 3, img: card2, title: 'Post-workout Recipes', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard...' },
        { id: 4, img: card3, title: 'How To Grill Corn', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard...' },
        { id: 5, img: card4, title: 'Crunchwrap Supreme', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard...' },
        { id: 6, img: card5, title: 'Broccoli Cheese Soup', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard...' },
    ]
    return (
        <div className='flex flex-col gap-20 sm:flex sm:flex-col'>
            <div className='flex justify-between sm:flex sm:w-full sm:flex-col-reverse '>
                <div className='p-7 px-20 text-left flex flex-col gap-[6rem] h-screen w-[50%] sm:w-full sm:px-0 sm:h-full  '>
                    <img src={logo} alt="logo" className='w-[107px] h-[83px] sm:hidden'/>
                    <div className='flex flex-col gap-3 sm:items-center'>
                        <div className='flex flex-col gap-0 text-[62px] sm:text-[38px] sm:w-full sm:items-center '>
                            <h1 className=' font-bold text-[#0E2368]'>Discover the </h1>
                            <div className='flex gap-3'>
                                <h1 className=' font-bold text-[#E23744]'>Best</h1>
                                <h1 className=' font-bold text-[#0E2368]'>Food</h1>
                            </div>
                            <h1 className='font-bold text-[#0E2368]'>and Drinks </h1>
                        </div>
                        <span className='text-[16px] font-[400] leading-[27px] text-[#444957] font-sans sm:text-[11px]'>Naturally made Healthcare Products for the<br /> better care & support of your body.</span>
                        <div className='mt-3'>
                            <button className='p-3 px-5 bg-[#E23744] rounded-full text-white text-[18px] font-bold font-sans sm:text-[12px] '>Explore Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] sm:w-full'>
                    <div className='relative'>
                        <img src={back} alt="back"  />
                        <div className='absolute -top-1 right-0'>
                            <img src={back1} alt="back"  />
                            <div className='top-5 right-5 absolute border-2 border-white rounded-full '>
                                <button className='p-3 text-white'>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#3C509D0A] flex justify-between sm:flex sm:flex-col'>
                <div className='w-[384px] h-[468px] ml-64 sm:hidden '>
                    <img src={image} alt="" className='w-full h-full' />
                </div>
                <div className='flex flex-col px-40 w-[50%] gap-5 justify-center items-center sm:w-full sm:px-12 sm:p-20 '>
                    <h1 className='text-[#0E2368] text-[45px] leading-[27px] font-semibold sm:text-[26px]'>About us</h1>
                    <span className='text-[#444957] text-[15px] font-[400] leading-[27px] text-left sm:text-center sm:text-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</span>
                    <div className='flex items-start justify-start w-full sm:flex sm:items-center sm:justify-center'>
                        <button className='p-2 px-7 bg-[#E23744] text-[16px] font-semibold leading-[36px] text-white rounded-full sm:text-[11px] '>Read More</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 px-20 sm:items-center '>
                <h1 className='text-[#0E2368] text-[56px] leading-[27px] font-semibold flex items-start sm:text-[28px] sm:flex sm:flex-col sm:items-center'>Latest Articles</h1>
                <div className='overflow-hidden'>
                    <div className='flex whitespace-nowrap gap-5 sm:flex sm:flex-col transition duration-1000 ease max-h-[1560px] sm:flex-wrap ' style={{ transform: `translate3d(${-currentCard * 100}%,0,0)`}}>
                        {data.map((value, index) => (
                            <div className='inline whitespace-normal m-0 sm:w-[95%] '>
                                <div className='border border-[#93A2D3] p-5 sm:p-5 flex flex-col items-center rounded-lg justify-center gap-5 '>
                                    <img src={value.img} alt="card" className='sm:w-[204px] sm:h-[166px]' />
                                    <div className='flex flex-col gap-3 items-center w-72 sm:w-[236px] '>
                                        <h1 className='text-[#0E2368] text-[21px] font-bold leading-[27px] sm:text-[16px]'>{value.title}</h1>
                                        <span className='text-[15px] text-[#444957] font-[400] leading-[27px] text-left sm:text-[12px] '>{value.text}</span>
                                        <div className='border-2 border-[#424961] p-2 px-5 rounded-full sm:px-10 sm:p-1'>
                                            <button className='text-[16px] text-[#424961] font-semibold leading-[35px] sm:text-[11px]'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <div className='border border-[#424961] w-[28px] h-[28px] rounded-md flex items-center justify-center cursor-pointer'>
                        <ChevronLeftIcon w={25} h={25} onClick={() => setCurrentCard(0)} />
                    </div>
                    <span className='text-[#424961] text-[22px] font-[400] leading-[27px]'>{currentCard + 1}/2</span>
                    <div className='border border-[#424961] w-[28px] h-[28px] rounded-md flex items-center justify-center cursor-pointer'>
                        <ChevronRightIcon w={25} h={25} onClick={() => setCurrentCard(1)} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home