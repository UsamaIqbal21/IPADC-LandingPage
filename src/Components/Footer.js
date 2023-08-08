import React from "react";
import Images from "../Assets/Images"
function Footer() {
  return (
    <section>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 lg:pl-12 xl:pl-24 2xl:pl-32">
            <div className="flex flex-col gap-y-5 ">
              <div>
                <h3 className="text-[#363940] font-metropolis font-semibold text-lg leading-[22px]"  data-aos="fade-up">
                  Products
                </h3>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    CSR Activities
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Green Banking
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    News
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Ongoing Campgain
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Updates
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <div>
                <h3 className="text-[#363940] font-metropolis font-semibold text-lg leading-[22px]" data-aos="fade-up">
                  Get Started
                </h3>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Career
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Contact Us
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Government Securities
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Examples
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    NIS
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <div>
                <h3 className="text-[#363940] font-metropolis font-semibold text-lg leading-[22px]" data-aos="fade-up">
                  About
                </h3>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    IPDC at a Glance
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Mission, VIsion & Values
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Corporate Governanace
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Shareholders
                  </h4>
                </div>
                <div>
                  <h4 className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Investor Relations
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <h3 className="text-[#010101] font-metropolis font-semibold text-lg leading-[22px]" data-aos="fade-up">
                  About the company
                </h3>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="w-[180px]">
                  <p className="text-[#676767] font-metropolis font-normal text-sm leading-[22px]" data-aos="fade-up">
                    Learn To Love Growth And Change And You Will Be A Success.
                    Microsoft Patch
                  </p>
                </div>
                <div className="flex items-center divide-x gap-x-2  " data-aos="fade-up">
                  <div className="flex items-center justify-center gap-x-2">
                    <img src={Images.call} alt="" width={22} height={22} />
                    <h6 className="text-black-100 text-center font-metropolis font-semibold text-lg leading-22 tracking-wider">
                      16519
                    </h6>
                  </div>
                  <div className="flex items-center justify-center gap-x-2 pl-2">
                    <img src={Images.facebook} alt="" width={22} height={22} />
                    <img src={Images.youtube} alt="" width={22} height={22} />
                    <img src={Images.linkedin} alt="" width={22} height={22} />
                    <img src={Images.instagram} alt="" width={22} height={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
