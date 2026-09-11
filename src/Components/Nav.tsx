import React from 'react';
import logo from '../assets/logo-text.png';
import { IoIosMenu } from 'react-icons/io';

const Nav = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white'>
            <div className=' md:flex md:justify-between md:items-center lg:flex lg:justify-between lg:items-center lg:mx-30 flex justify-between items-center mx-6 py-4'>
                <div className='lg:hidden md:hidden text-2xl '>
                    <IoIosMenu />
                </div>
                <div>
                    <img src={logo} alt="" className='lg:w-full w-23' />
                </div>
                <div className='hidden md:flex lg:flex'>
                    <ul className='md:flex md:gap-3 lg:flex lg:justify-center lg:items-center lg:gap-10 lg:text-sm'>
                        <li className='text-[#DB2777]'>Home</li>
                        <li className='text-[#475569]'>Technologies</li>
                        <li className='text-[#475569]'>Projects</li>
                        <li className='text-[#475569]'>About</li>
                        <li className='text-[#475569]'>Contact</li>
                    </ul>
                </div>
                <div className='md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center flex justify-center items-center'>
                    <p className=' lg:text-sm text-[10px] text-[#475569]'>Sign In</p>
                    <button className='bg-[#DB2777] rounded-3xl lg:py-2 lg:px-4 text-amber-50 lg:ml-4 md:ml-2 font-semibold px-2.5 py-1 md:text-sm lg:text-sm text-[10px] ml-3'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;