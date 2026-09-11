import React from 'react';
import banner from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <div>
      <div className='md:flex lg:flex lg:flex-row lg:justify-between lg:items-center lg:text-left lg:mx-30 lg:my-10 flex flex-col text-center mx-5 my-15 '>
        <div>
          <h1 className='font-bold lg:text-6xl text-3xl '>Build Your Ideal</h1>
          <h1 className='font-bold lg:text-6xl text-3xl bg-gradient-to-r from-[#e4400e] from-20%- via-[#F04145] via-30% to-[#4d0bc0] to-70% bg-clip-text text-transparent mb-8'>Development Stack</h1>
          <p className='lg:w-[85%] text-[#475569] lg:text-lg text-sm mb-20'>
            Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the
            stack that fits your next project.
          </p>
          <button className=' bg-gradient-to-r from-[#F97316] - to-[#EC4899] px-3 py-3 text-white font-semibold rounded-xl lg:mr-8 mr-3'>Explore Technologies</button>
          <button className='border border-gray-300 lg:px-15 lg:py-3 rounded-xl text-gray-700 lg:text-sm px-12 py-3'>Learn More</button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;