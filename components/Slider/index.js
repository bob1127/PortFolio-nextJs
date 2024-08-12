import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = 7;

  useEffect(() => {
    const handleSlider = () => {
      if (currentIndex < totalSlides) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(1);
      }

      gsap.to(".slide-titles", {
        onStart: () => {
          setTimeout(() => {
            updateActiveSlide();
          }, 100);

          updateImages(currentIndex + 1);
        },
        x: `-${(currentIndex - 1) * 11.1111}%`,
        duration: 2,
        ease: "power4.out",
      });
    };

    const updateActiveSlide = () => {
      document.querySelectorAll(".title").forEach((el, index) => {
        if (index === currentIndex) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };

   const updateImages = (imageNumber) => {
  // 替换为你的实际外部 URL 模式
  const baseURL = 'https://www.dot-st.com/static/docs/lowrysfarm/pages/lf_kids_jul2024/assets/img/lowrysfarm_kids_2/';
  const imgSrc = `${baseURL}${imageNumber}.jpg`;

  // 创建 img 元素
  const imgTop = document.createElement("img");
  const imgBottom = document.createElement("img");

  imgTop.src = imgSrc;
  imgBottom.src = imgSrc;

  // 设置样式
  imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
  imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
  imgTop.style.transform = "scale(2)";
  imgBottom.style.transform = "scale(2)";

  // 将图片添加到 DOM
  document.querySelector(".img-top").appendChild(imgTop);
  document.querySelector(".img-bottom").appendChild(imgBottom);

  // 应用 GSAP 动画
  gsap.to([imgTop, imgBottom], {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    transform: "scale(1)",
    duration: 2,
    ease: "power4.out",
    stagger: 0.15,
    onComplete: trimExcessImages,
  });
};


    const trimExcessImages = () => {
      const selectors = [".img-top", ".img-bottom"];

      selectors.forEach((selector) => {
        const container = document.querySelector(selector);
        const images = Array.from(container.querySelectorAll("img"));
        const excessCount = images.length - 5;

        if (excessCount > 0) {
          images
            .slice(0, excessCount)
            .forEach((image) => container.removeChild(image));
        }
      });
    };

    document.addEventListener("click", handleSlider);

    return () => {
      document.removeEventListener("click", handleSlider);
    };
  }, [currentIndex]);

  return (
    <div className="slider w-full h-full relative">
      <div className="slide-titles absolute top-0 left-0 flex w-[300vw] h-full pointer-events-none z-10">
        <div className="title flex-1 w-full h-full flex justify-center items-center">
          <h1 className="text-center text-2xl font-light text-gray-400 transition-colors duration-300">Neo Forge Towers</h1>
        </div>
        {/* Repeat for other titles */}
      </div>
      <div className="slide-images w-[550px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-auto">
        <div className="img-top absolute w-full h-full clip-path-polygon transition-clip-path duration-1000 ease-in-out"></div>
        <div className="img-bottom absolute w-full h-full clip-path-polygon transition-clip-path duration-1000 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Slider;
