import React from "react";

function NewsLetter() {
  return (
    <section className="bg-pink-100 bg-opacity-20">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div>
                <h3 className="text-[#343434] text-center font-metropolis font-semibold text-3xl leading-[43px] font-feature-ligatures-none" data-aos="fade-up">
                  Newsletter
                </h3>
              </div>
              <div className="md:w-[410px]">
                <p className="text-[#999] text-center font-metropolis font-normal text-base leading-[22px] font-feature-ligatures-none" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  ac quis aliquam arcu lacus.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-y-2 md:gap-y-0 md:gap-x-5">
              <input
                type="email"
                placeholder="Your email"
                className="pl-2 rounded-md border border-black-20 bg-white py-[6px] md:py-3 w-[303px] md:w-[343px] "data-aos="fade-up"
              />

              <div className="rounded-md bg-[#ED017F] py-3 px-6" data-aos="fade-up">
                <h4 className="text-white text-center font-metropolis font-semibold text-sm leading-[20px] tracking-wider uppercase">
                  Subscribe
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
