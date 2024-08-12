// import Seo from '@/components/Seo';
// import CustomLink from '@/components/CustomLink';
import Inner from '../../components/Inner/index.jsx'
import Marquee from "react-fast-marquee";
import TextHover from '../../components/TextHover/index.jsx'
import Slider from '../../components/Slider/slider.jsx'
import MenuToggle from '../../components/MenuToggle/index.jsx'
import Trackeye from '../../components/Trackeye/page.jsx'
export default function Home() {
  return (
    <div className='h-[300vh]'>
      <MenuToggle/>
      <Inner backgroundColor={"#B0AD98"}>

    <div className='Hero-secrion  border-1 border-black '>
      <div className='wrap flex flex-col  lg:flex-row'>
        <div className='hero-left overflow-hidden mt-[38px] border border-blac relative w-full lg:w-[65%]'>
          {/* <div className="top px-[50px] py-[90px]">
            <h1 className='text-[80px]'>DREAM WEB
CREACTIVEs</h1>
            <div className="link-wrap mt-3">
              <a   className='text-[20px]' href=""> 網頁設計 |</a>
              <a   className='text-[20px]' href=""> 形象影片 |</a>
               <a  className='text-[20px]'  href=""> 網頁設計 |</a>
              <a   className='text-[20px]' href=""> 形象影片</a>
            </div>

            
          </div> */}
                 <TextHover/>
                 <Trackeye/>
          <div className="bottom">
            
          </div>
           <div className='absolute bg-black w-full bottom-0'>
       
            <Marquee>
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
  </Marquee>

          </div>

        </div>
        <div className='hero-middle border border-black w-full bg-white lg:w-[20%] p-[50px] flex  justify-center relative flex-col items-center pt-[50px] border-1 '>
         
          <h2 className='text-[30px] text-bold'>創意無限，設計未來 創意無限，<br/></h2><br/>
         
       

        </div>
        <div className='hero-right p-[50px] border-1 border-black border pt-[50px] flex flex-col  w-full lg:w-[15%]'>
          <div className="top">
            <p className='text-[22px]'>contact</p>
          </div>
          <div className="bottom">
            <div className='contact-icon '>
              
            </div>
            
          </div>

        </div>
        
      </div>
      
    </div>

    <section className='section_second border border-black h-[80vh] flex flex-col lg:flex-row'>
      <div className="left p-[100px] w-full lg:w-1/2 border-r-2 border-black">
      <div>
         <h2 className='text-[80px] flex justify-center  leading-[80px] w-2/3 pt-[100px] items-center'>WHAT’S
Design in Life</h2>
         <div className='flex flex-row'>
            <p>網站案例｜</p>
          <p>合作案例｜</p>
           <p>合作案例｜</p>
         </div>
        
      </div>
       
        
      </div>
      <div className="right h-full flex flex-col w-full lg:w-1/2">

          <div className="top flex justify-center items-center h-1/2  flex-col w-full border-b-2 border-black">
             <h4 className='text-[22px] text-light'><span>"</span>數位設計，提升您的業務<span>"</span></h4>
             <h3 className='text-[38px] text-extrabold mt-[30px]'>104年11月 11 日</h3>

          </div>
          <div className="bottom flex p-[40px] items-center  h-1/2 justify-start flex-col w-full ">
             <h4 className='text-[22px] text-light'><span>"</span>創意驅動，技術為本<span>"</span></h4>
             <p className='mt-[20px] w-2/3'>我們相信創意是設計的核心，技術是實現創意的橋樑。
我們致力於將最具創意的想法轉化為現實，通過尖端技
術提供卓越的數字體驗。</p>
          </div>

      </div>
      
    </section>




        <section className='second_third border border-black h-[80vh] flex-col md:flex-row flex'>
      <div className="left p-[100px] w-1/2 border-r-2 border-black">
      <div>
         <h2 className='text-[80px] flex justify-center  leading-[80px] w-2/3 pt-[100px] items-center'>WHAT’S
Design in Life</h2>
         <div className='flex flex-row'>
            <p>網站案例｜</p>
          <p>合作案例｜</p>
           <p>合作案例｜</p>
         </div>
        
      </div>
       
        
      </div>
      <div className="right h-full  flex flex-row md:flex-col w-full md:w-1/2">

          <div className="top flex justify-center items-center h-full md:h-1/2  flex-col w-full border-b-2 border-black">
             <h4 className='text-[22px] text-light'><span>"</span>數位設計，提升您的業務<span>"</span></h4>
             <h3 className='text-[38px] text-extrabold mt-[30px]'>104年11月 11 日</h3>

          </div>
          <div className="bottom md:border-none border border-black flex p-[40px] items-center  h-1/2 justify-start flex-col w-full ">
             <h4 className='text-[22px] text-light'><span>"</span>創意驅動，技術為本<span>"</span></h4>
             <p className='mt-[20px] w-2/3'>我們相信創意是設計的核心，技術是實現創意的橋樑。
我們致力於將最具創意的想法轉化為現實，通過尖端技
術提供卓越的數字體驗。</p>
          </div>

      </div>
      
    </section>
    {/* <Slider/> */}
    
</Inner>
     
    </div>
  );
}
