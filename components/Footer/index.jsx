'use client';
import dynamic from 'next/dynamic';
import React from 'react';
const App = dynamic(() => import('../PhysicsAnimation/app.jsx'), {
  ssr: false,
});

export default function Footer() {
  return (
    <div className='border-2 border-black py-[40px] px-[100px] bg-slate-100 flex flex-col lg:flex-row'>
      <div className='left border-1 border-black p-[40px] w-1/2'>
        <ul>
          <li className='font-normal text-[16px] my-1'>網頁設計</li>
          <li className='font-normal text-[16px] my-1'>短影音</li>
          <li className='font-normal text-[16px] my-1'>商業攝影</li>
          <li className='font-normal text-[16px] my-1'>SEO行銷</li>
          <li className='font-normal text-[16px] my-1'>網頁設計</li>
        </ul>
      </div>
      <div className='right  border-1 border-black p-[40px] w-1/2'>
        <div className='bg-black border-3 border-blue-400 h-[200px] rounded-xl flex justify-center items-center text-white w-full'>
          FOOTER
        </div>
      </div>
    </div>
  );
}
