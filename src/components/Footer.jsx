import React from "react";
import { SocialIcon } from "react-social-icons";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer class="bg-gray-200 ">
      <button
        className="w-full text-lg  font-semibold flex justify-center"
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp /> Back To Top
      </button>
      <div class="mx-auto w-full max-w-screen-xl ">
        <div class="grid grid-cols-1 gap-8  lg:py-8 md:grid-cols-4 m-6 md:m-11">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase  md:text-xl">
              Company
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium md:text-lg">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  About Us
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Sell on Ecoyaan
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase md:text-xl">
              Links{" "}
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium md:text-lg">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy{" "}
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms of Use{" "}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase md:text-xl ">
              Follow Us{" "}
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="">
                  <SocialIcon url="https://instagram.com" />{" "}
                </a>
                <a href="" className="#">
                  <SocialIcon url="https://linkedin.com/in/couetilc" />{" "}
                </a>
                <a href="">
                  <SocialIcon url="https://facebook.com" />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <p class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Subscribe to receive updates on blogs,future launches and more
            </p>
            <form className="mt-7">
              <input
                type="text"
                placeholder="Your Email Address"
                className="p-2 w-full rounded-md "
              />
              <p>
                By subscribing ,you agree to receive notification
                <div>
                  <a href="" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </p>
              <button className="w-full bg-[#16a34a] text-white text-center p-3 rounded-md hover:cursor-pointer hover:bg-green-700 mt-7">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-300 border-0 mx-3" />{" "}
      </div>
      <div class="mx-auto w-full max-w-screen-xl ">
        <div class="grid grid-cols-1 gap-8  md:py-6 lg:py-8 md:grid-cols-4 m-6 md:m-11">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase md:text-xl">
              Registered Address:{" "}
            </h2>
            <div className="text-lg text-gray-500">
              <p>1-N-12T-781/1</p>
              <p>1-N-12T-781/1</p>

              <p>Urvastores,</p>
              <p>Ashoknagar(MR),</p>
              <p>Mangalore,</p>
              <p>Dakshina Kannada- 575006,</p>

              <p>Karnataka, India</p>
            </div>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase md:text-xl">
              Legal Business Name:{" "}
            </h2>
            <div className="text-lg text-gray-500">
              <p>Kindkarma E-Retail Private Limited</p>
              <br />
              <p>CIN: U47912KA2023PTC182592</p>
              <p>Telephone: +91 9980490777</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-3 text-center text-white bg-black">
        <p>© 2023 - 2024, Ecoyaan TM</p>
      </div>
    </footer>
  );
};

export default Footer;
