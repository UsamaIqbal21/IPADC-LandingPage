import React from "react";
import Images from "../Assets/Images";
function OurServices() {
  return (
    <section className="bg-pink-100 bg-opacity-20">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div>
              <h3 className="text-[#343434] text-center font-metropolis font-semibold text-3xl lg:text-4xl leading-[43px] font-feature-ligatures-none" data-aos="fade-up">
                Our Services
              </h3>
            </div>
            <div>
              <p className="text-[#999] text-center font-metropolis font-normal text-base leading-[22px] font-feature-ligatures-none" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
                dapibus mattis vel feugiat erat tortor eleifend.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-y-12 pt-24">
            <div className="w-[254px] flex flex-col items-center justify-center gap-y-5 mx-auto" data-aos="fade-up">
              <div className="h-[365px] ">
                <img src={Images.service1} alt="" />
              </div>
              <div className="flex items-center  space-x-5">
                <div className="w-[195px]">
                  <h3 className="text-[#363940] font-metropolis font-semibold text-xl leading-[35px] tracking-wide font-feature-ligatures-none uppercase">
                    IPDC SAVING SCHEMES
                  </h3>
                </div>
                <div>
                  <img src={Images.circlearrow} alt="" width={37} height={37} />
                </div>
              </div>
            </div>
            <div className="w-[254px] flex flex-col items-center justify-center gap-y-5 mx-auto" data-aos="fade-up">
              <div className="h-[365px] ">
                <img src={Images.service2} alt="" />
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-[195px]">
                  <h3 className="text-[#363940] font-metropolis font-semibold text-xl leading-[35px] tracking-wide font-feature-ligatures-none uppercase">
                    IPDC Personal loan
                  </h3>
                </div>
                <div>
                  <img src={Images.circlearrow} alt="" width={37} height={37} />
                </div>
              </div>
            </div>
            <div className="w-[254px] flex flex-col items-center justify-center gap-y-5 mx-auto" data-aos="fade-up"> 
              <div className="h-[365px] ">
                <img src={Images.service3} alt="" />
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-[195px]">
                  <h3 className="text-[#363940] font-metropolis font-semibold text-xl leading-[35px] tracking-wide font-feature-ligatures-none uppercase">
                    IPDC Deposit schemes
                  </h3>
                </div>
                <div>
                  <img src={Images.circlearrow} alt="" width={37} height={37} />
                </div>
              </div>
            </div>
            <div className="w-[254px] flex flex-col items-center justify-center gap-y-5 mx-auto xl:pb-8 " data-aos="fade-up">
              <div className="h-[365px] ">
                <img src={Images.service4} alt="" />
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-[195px]">
                  <h3 className="text-[#363940] font-metropolis font-semibold text-xl leading-[35px] tracking-wide font-feature-ligatures-none uppercase">
                    IPDC auto loan
                  </h3>
                </div>
                <div className="pt-2">
                  <img src={Images.circlearrow} alt="" width={37} height={37} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
