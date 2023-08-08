import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Images from "./Assets/Images";
import Customer from "./Components/Customer";
import BusinessPartners from "./Components/BusinessPartners";
import IpdcAtGlance from "./Components/IpdcAtGlance";
import OurServices from "./Components/OurServices";
import OurBestResults from "./Components/OurBestResults";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="home">
        <Navbar />

        <div className="pt-12 md:pt-16 lg:pt-24 2xl:pt-44 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start justify-center gap-y-8">
              <div className="flex flex-col items-start gap-y-6 lg:pl-4 xl:pt-12 xl:pl-12 2xl:pl-0 2xl:gap-x-20">
                <div className="flex flex-col items-start gap-y-3 md:gap-y-4 xl:gap-y-5 md:w-[313px] lg:w-[403px] xl:w-[453px] 2xl:w-[553px] 2xl:pr-24">
                  <div className="pr-12 ">
                    <h3 className="text-black-100 font-metropolis font-bold text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10" data-aos="fade-right">
                      Chase Your Dream with us
                    </h3>
                  </div>
                  <div className="pr-3 md:w-[280px] lg:w-[380px]">
                    <p className="text-black-60 font-metropolis font-normal text-base leading-6" data-aos="fade-right">
                      The harder you work for something, the greater you’ll feel
                      when you achieve it.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-2" data-aos="fade-up">
                  <div className="rounded-md bg-[#ED017F] p-3 2xl:p-4 w-[140px] 2xl:w-[157px] 2xl:h-[46px] h-[40px]">
                    <h4 className="text-white text-center font-metropolis font-semibold text-xs leading-tight tracking-wide uppercase">
                      Apply Online
                    </h4>
                  </div>
                  <div className="rounded-md border border-[#ED017F] p-3 2xl:p-4 w-[140px] 2xl:w-[188px] 2xl:h-[48px] h-[40px]">
                    <h4 className="text-[#ED017F] text-center font-metropolis font-semibold text-xs leading-tight tracking-wide uppercase">
                      Loan Caclulator
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-center divide-x gap-x-4 md:pt-2 lg:pt-28 xl:pt-28 2xl:pt-28" data-aos="fade-up">
                  <div className="flex items-center justify-center gap-x-3">
                    <img src={Images.call} alt="" width={24} height={24} />
                    <h6 className="text-black-100 text-center font-metropolis font-semibold text-lg leading-22 tracking-wider">
                      16519
                    </h6>
                  </div>
                  <div className="flex items-center justify-center gap-x-3 pl-4">
                    <img src={Images.facebook} alt="" width={24} height={24} />
                    <img src={Images.youtube} alt="" width={24} height={24} />
                    <img src={Images.linkedin} alt="" width={24} height={24} />
                    <img src={Images.instagram} alt="" width={24} height={24} />
                  </div>
                </div>
              </div>

              <div className="hidden md:block bg-[#FFEAF5] w-[52%] lg:w-[45%] xl:w-[46%] absolute top-0 right-0 min-h-[33vh] lg:min-h-[80vh] xl:min-h-[73vh] 2xl:min-h-[70vh] -z-10"></div>
              <div className="relative xl:w-[666px] 2xl:w-[766px] ">
                <div className="z-10 2xl:pl-20" data-aos="fade-up">
                  <img src={Images.hero} alt="" />
                </div>
                <div className="absolute top-5 left-0 lg:left-16 xl:left-20 2xl:left-44 flex 
                items-center justify-center gap-x-1  rounded-full bg-white shadow-lg w-[131px] lg:w-[191] h-[51px] lg:h-[61px] " data-aos="fade-left">
                  <img
                    src={Images.car}
                    alt=""
                    className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] "
                  />
                  <h4 className="text-black-80 font-metropolis font-bold text-base leading-22 ">
                    Car Loans
                  </h4>
                </div>
                <div className="absolute bottom-10 md:top-28 right-0 lg:right-8 xl:top-36 xl:right-8 
                flex items-center justify-center gap-x-1 rounded-full bg-white shadow-lg w-[141px] h-[51px]" data-aos="fade-left">
                  <img
                    src={Images.house}
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <h4 className="text-black-80 font-metropolis font-bold text-base leading-22">
                    home Loans
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Customer />
      <BusinessPartners />
      <IpdcAtGlance />
      <OurServices />
      <OurBestResults />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
