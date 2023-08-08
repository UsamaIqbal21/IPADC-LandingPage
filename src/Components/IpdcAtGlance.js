import React from "react";
import Images from "../Assets/Images";
function IpdcAtGlance() {
  return (
    <section>
      <div className=" mx-auto px-4 md:px-0 md:pr-4 md:pl-0 py-20 md:py-0">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-end gap-y-16 md:gap-y-0 md:gap-x-4 lg:gap-x-12 xl:gap-x-28 2xl:gap-x-64 ">
          <div className="flex flex-col items-start gap-y-2 xl:gap-y-12  md:w-[460px] md:py-0">
            <div className="pt-4 2xl:pt-0">
              <h3 className="text-[#343434] font-metropolis font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-38 font-feature-ligatures-none" data-aos="fade-up">
                IPDC AT A GLANCE
              </h3>
              <p className="text-[#676767] font-metropolis font-normal text-base leading-29 font-feature-ligatures-none pt-2" data-aos="fade-up">
                IPDC Finance Limited (previously known as "Industrial Promotion
                and Development Company of Bangladesh Limited") is the first
                private sector financial institution of the country established
                in 1981 by a distinguished group of shareholders namely
                International Finance Corporation (IFC), USA, German Investment
                and Development Company (DEG), Germany, The Aga Khan Fund for
                Economic Development (AKFED), Switzerland, Commonwealth
                Development Corporation (CDC), UK and the Government of
                Bangladesh
              </p>
            </div>
            <div className="flex items-center justify-center" data-aos="fade-up">
              <div>
                <h3 className="text-[#ED017F] font-metropolis font-normal text-xl leading-[26px] font-feature-ligatures-none">
                  Read More
                </h3>
              </div>
              <div className="pt-1">
                <img src={Images.arrow} alt="" width={24} height={24} />
              </div>
            </div>
          </div>
          <div className="md:w-[460px] xl:w-[611px]" data-aos="fade-up">
            <img
              src={Images.ipdceAtGlance}
              alt=""
              className="rounded-xl md:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IpdcAtGlance;
