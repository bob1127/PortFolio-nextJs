// import Seo from '@/components/Seo';
import React from 'react';
// import textReveal from '../../components/TextReveal/';
export default function Home() {
  return (
    <div className=''>
      <h1
        data-aos='fade-in'
        className='text-gray-900 text-[120px] text-center font-extrabold'
      >
        Enhance human <br /> potential
      </h1>
      {/* <textReveal /> */}
      <div className='border-2 border-black '></div>
      <img
        data-aos='zoom-in'
        src='https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668e6aca4fb399ee1389df93_stada-img-3-p-1600.webp'
        width={1920}
        height={700}
        className='mx-auto'
        alt=''
      />
    </div>
  );
}
