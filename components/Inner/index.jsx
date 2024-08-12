import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { slide, opacity, perspective } from './anim';


const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Inner({children}) {
    return (
        <div className='inner'>
            <motion.div className='slide' {...anim(slide)}/>
            <motion.div className='page' {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    <div className='header z-[99999999]'>
                        
                        <Link className='Company-logo ' href="/">Home-LOGO</Link>
                        <Link href="/about">關於我們
                        </Link>
                        <Link href="/contact">SEO 行銷</Link>
                          <Link className=' ' href="/">網頁行銷</Link>
                        <Link href="/about">網站作品</Link>
                        <Link href="/">合作案例</Link>
                          <Link className=' ' href="/">Home</Link>
                        <Link href="/about">企業形象影片</Link>
                        <Link href="/about">聯絡我們</Link>
                       
                    </div>
                    {
                        children
                    }
                </motion.div>
            </motion.div>
          
          
        </div>
    )
}