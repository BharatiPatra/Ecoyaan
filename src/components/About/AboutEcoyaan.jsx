import React from "react";
import aboutSustainable from "../../assets/aboutSustainable.png";
import ecoyaanlogo from "./ecoyaanlogo.png";
const AboutEcoyaan = () => {
  return (
    <div className="flex  items-start  h-auto bg-[#f0f8ff]  w-[100vw]">
      <div className="w-[100vw] h-auto flex m-6 gap-24">
        <div className="leading-10 md:h-[80vh] text-justify">
          <h1 className="font-semibold text-4xl mb-8"> About Ecoyaan</h1>
          <p className="text-lg tracking-wider md:w-1/2 md:px-14 text-gray-800 md:text-xl">
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
            <br />
          </p>
          <div className="w-full items-end ">
            <img
              src={aboutSustainable}
              alt=""
              className="basis-1/2 md:hover:scale-110 duration-150  md:w-1/2 md:absolute md:right-0 md:top-24 md:p-10 "
            />
          </div>
          <p className="text-lg tracking-wider mt-6 md:w-1/2 md:px-14 text-gray-800 md:text-xl">
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
          </p>
          <ul className="text-lg tracking-wider list-image-[url(ecoyaanlogo.png)] md:w-1/2 md:px-14 text-gray-800 md:text-xl">
            <li className="flex">
              <img src={ecoyaanlogo} className="w-5 h-5 pr-2" />
              Tips and tricks to adopt a more eco-friendly and low-waste
              lifestyle
            </li>
            <li className="flex">
              <img src={ecoyaanlogo} className="w-5 h-5 pr-2" />
              Videos, posts, and quizzes on climate change and sustainability
            </li>
            <li className="flex">
              <img src={ecoyaanlogo} className="w-5 h-5 pr-2" />
              Events and pledges that invite you to adopt a more sustainable
              lifestyle
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutEcoyaan;
