import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Images from "../Assets/Images";

function BusinessPartners() {
  return (
    <section className="bg-pink-100 bg-opacity-20">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div>
            <h3 className="text-[#343434] font-metropolis font-normal text-xl md:text-2xl leading-normal tracking-wider text-center" data-aos="fade-up">
              BUSINESS PARTNERS
            </h3>
          </div>
          <div className="pt-32 pb-4 " data-aos="fade-up">
            <style>
              {`
              .swiper-pagination {
               position: static;
               display: flex;
               justify-content: center;
               padding-top: 50px;
               padding-right: ${window.innerWidth > 1000 ? "40px" : "0px"}; 
                 }
             `}
            </style>
            <style>
              {`
        .swiper-pagination-bullet {
          background-color: #F467B2;
        }
      `}
            </style>
            <Swiper
              slidesPerView={
                window.innerWidth < 768 ? 1 : window.innerWidth < 1000 ? 3 : 4
              }
              spaceBetween={10}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="w-[100%]   "
            >
              <SwiperSlide>
                <div >
                  <div className="w-[193px] h-[110px] mx-auto">
                    <img src={Images.partner1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="w-[168px] h-[88px] mx-auto">
                    <img src={Images.partner2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="w-[186px] h-[106px] mx-auto">
                    <img src={Images.partner3} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="w-[189px] h-[108px] mx-auto">
                    <img src={Images.partner4} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessPartners;
