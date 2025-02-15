import React from 'react';
import img1 from '../../assets/Emran_cropped_1.png'
import Navbar from '../../SharedComponents/Navbar/Navbar';

const Home = () => {
    return (
        <div className='flex '>
            <div className='lg:h-screen border-2 '>
                <img className='h-screen max-w-lg  object-cover' src={img1} alt="" />
            </div>
            <div className='pl-12  pt-20 text-justify'>
                <h3 className='text-[#0000001A] font-light text-7xl text-left leading-none'>HI IT'S</h3>
                <h1 className='text-[#000000] font-light lg:text-[168px] leading-none text-left'>EMRAN</h1>
                <h5 className='text-[#000000CC] font-normal text-3xl leading-none'>Product Designer</h5>
                <p className='text-[#000000] font-light text-xl pt-36 pr-40'>I am a creativity practitioner with over 5 years of professional experience designing solutions in the digital product industry as a UI and UX designer. My focus is on creating clear visual concepts that deliver impactful and inclusive experiences. I believe that beauty is an expression, but ultimately, we value the solutions that make us feel better and safer.</p>
                <p className='text-[#000000] font-normal text-xl pt-8 '>contact@hiemran.com</p>
            </div>
            <div className='border pr-10 pt-5 pl-2'>
                <Navbar></Navbar>
            </div>
           
        </div>
    );
};

export default Home;

//className='pl-12 lg:pr-80 pt-20 text-justify ' for second div