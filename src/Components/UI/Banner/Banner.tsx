"use client"
import Image from "next/image";
import { bannerData } from "../../Utils/data";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  const laptop = {
    initial: { y: 0, rotate: 35, scale: 0 },
    animate: {
      y: 20,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className=""
    >
      {bannerData.map((banner, index) => (
        <SwiperSlide key={index} className="relative w-full">
          <motion.div
           
          >
            <div>
              <Image
                src={banner.image}
                className="w-full"
                alt=""
                width={800}
                height={400}
              />
              <motion.div 
               variants={laptop}
               initial='initial'
               animate='animate'
               style={{
                 clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
               }}
              className="absolute inset-0 flex flex-col justify-center items-center bg-primary w-[60%]  lg:w-[35%] h-[50%] lg:h-[40%]  mx-auto top-[52%] sm:p-10 lg:p-1">
                <h2 className="text-xl lg:text-2xl text-secondary font-bold mb-5 text-center">{banner.title}</h2>
                <p className="text-sm lg:text-xl text-gray-300 text-center  font-bold">{banner.description}</p>
              </motion.div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
