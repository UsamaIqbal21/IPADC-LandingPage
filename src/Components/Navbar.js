import React, { useState, useEffect } from "react";
import Images from "../Assets/Images";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle toggling the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scrolling behavior
  const handleScroll = () => {
    // Adjust the threshold value (e.g., 100) as needed for your specific case
    const threshold = 100;
    const scrolled = window.scrollY > threshold;
    setIsScrolled(scrolled);
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-transparent ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white shadow-xl pb-2 md:pb-9 z-10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full lg:pt-12 ">
            <div className="flex items-center space-x-16 flex-shrink-0">
              <a href="#home">
                <img src={Images.logo} alt="" className="w-[109px] h-[53px]" />
              </a>
            </div>
            <div className="hidden lg:block pt-2 ">
              <div className=" flex items-baseline space-x-5 2xl:space-x-9">
                <a
                  href="#home"
                  className="text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
                >
                  Retail
                </a>
                <a
                  href="#home"
                  className="text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
                >
                  SME
                </a>
                <a
                  href="#home"
                  className="text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
                >
                  Corporate
                </a>
                <a
                  href="#home"
                  className="text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
                >
                  About Us
                </a>
                <a
                  href="#home"
                  className="text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
                >
                  Covid 19
                </a>
                <a
                  href="#home"
                  className="text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
                >
                  Campgains
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center justify-center space-x-6 ">
                <div>
                  <img src={Images.Magnifier} alt="" width={24} height={24} />
                </div>
                <div className="border rounded-md bg-[#ED017F] p-2">
                  <h4 className="text-white text-center font-rubik font-medium tracking-widest text-xs">
                    iSERVICE
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-[#ED017F]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } lg:hidden fixed inset-y-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 transform`}
        id="mobile-menu"
      >
        <div className="pt-2 pl-2">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-[#ED017F]"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center pb-6 py-3">
          <a href="#home">
            <img src={Images.logo} alt="" className="w-[109px] h-[53px]" />
          </a>
        </div>
        <div className="p-4  space-y-7">
          <a
            href="#home"
            className="block text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
          >
            Retail
          </a>
          <a
            href="#home"
            className="block text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
          >
            SME
          </a>
          <a
            href="#home"
            className="block text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
          >
            Corporate
          </a>
          <a
            href="#home"
            className="block text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
          >
            About Us
          </a>
          <a
            href="#home"
            className="block text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
          >
            Covid 19
          </a>
          <a
            href="#home"
            className="block text-black-100 font-metropolis font-semibold tracking-widest text-xs uppercase"
          >
            Campgains
          </a>
        </div>
        <div className="flex items-center  space-x-6 pl-4 pt-8">
          <div>
            <img src={Images.Magnifier} alt="" width={24} height={24} />
          </div>
          <div className="border rounded-md bg-[#ED017F] p-2">
            <h4 className="text-white text-center font-rubik font-medium tracking-widest text-xs">
              iSERVICE
            </h4>
          </div>
        </div>
        <div className="flex items-center divide-x gap-x-2 pt-8 pl-4">
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
    </nav>
  );
};

export default Navbar;
