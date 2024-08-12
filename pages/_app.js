import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from "@nextui-org/react";
import Navbar from '../components/sideTabs/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Marquee from 'react-fast-marquee';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // 导入 AOS 的 CSS 文件
// Dynamically import the PhysicsAnimationApp component with ssr set to false
const PhysicsAnimationApp = dynamic(() => import('../components/PhysicsAnimation/app.jsx'), { ssr: false });

export default function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间（毫秒）
      easing: 'ease-in-out', // 动画缓动函数
    });
  }, []);
    return (
        <div className='main overflow-hidden'>
            <div className='max-w-[1920px] mx-auto'>
                <NextUIProvider>
                    <AnimatePresence mode='wait'>
                        {/* <Navbar/> */}
                        <Component key={router.route} {...pageProps} />

                        <div className='border-t-2 border-black'>
                             <PhysicsAnimationApp />
                        </div>
                       
                        <div className='bg-black'>
              <Marquee>
                <div>
                  <p className='text-white w-full p-2'>
                    niko and ... COFFEE / niko and ...
                    KITCHENは、スタイルエディトリアルブランドである niko and
                    ...があらゆる食文化を独自の視点で編集するカフェ&レストラン。
                    「編集という視点を、食にも。」という考えのもとここでしか味わうことができない、
                    味覚を超えた様々な食まわりの体験をお届けしていきます。niko
                    and ... COFFEE / niko and ...
                    KITCHENは、スタイルエディトリアルブランドである niko and
                    ...があらゆる食文化を独自の視点で編集するカフェ&レストラン。
                    「編集という視点を、食にも。」という考えのもとここでしか味わうことができない、
                    味覚を超えた様々な食まわりの体験をお届けしていきます。niko
                    and ... COFFEE / niko and ...
                    KITCHENは、スタイルエディトリアルブランドである niko and
                    ...があらゆる食文化を独自の視点で編集するカフェ&レストラン。
                    「編集という視点を、食にも。」という考えのもとここでしか味わうことができない、
                    味覚を超えた様々な食まわりの体験をお届けしていきます。niko
                    and ... COFFEE / niko and ...
                    KITCHENは、スタイルエディトリアルブランドである niko and
                    ...があらゆる食文化を独自の視点で編集するカフェ&レストラン。
                    「編集という視点を、食にも。」という考えのもとここでしか味わうことができない、
                    味覚を超えた様々な食まわりの体験をお届けしていきます。
                  </p>
                </div>
                {/* <div>
                  <p className='text-white w-[110px] p-2'>lorem |</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem📸</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem🎡</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem⏰</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem💡</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem📸</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem🎡</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem⏰</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem💡</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem📸</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem🎡</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem⏰</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem💡</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem📸</p>
                </div>
                <div>
                  <p className='text-white w-[110px] p-2'>lorem🎡</p>
                </div> */}
              </Marquee>
            </div>
                        <Footer />
                    </AnimatePresence>
                </NextUIProvider>
            </div>
        </div>
    );
}
