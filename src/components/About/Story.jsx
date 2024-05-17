import React from "react";
import abhishek from "../../assets/abhishek.png";
import sarwan from "../../assets/sarwan.png";
import { SocialIcon } from "react-social-icons";

const Story = () => {
  return (
    <div className="bg-[#f0f8ff] w-[100vw] max-h-max p-5  ">
      <h1 className="font-semibold text-2xl md:text-4xl mb-2">Our Story</h1>

      <div className="flex flex-col justify-center items-center md:flex-row gap-12">
        <div>
          <img
            src={abhishek}
            alt=""
            className="w-[250px] hover:scale-110 duration-150 "
          />
          <img
            src={sarwan}
            alt=""
            className="w-[250px] hover:scale-110 duration-150 "
          />
        </div>
        <div>
          <p className="text-gray-800 md:text-xl  text-justify leading-4">
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission.
          </p>
          <br />
          <p className="text-gray-800 md:text-xl  text-justify leading-4">
            Our research suggests that many Indians understand global warming,
            yet access to sustainable practices and products remains limited. We
            also noticed that there is a lack of support for eco-friendly
            businesses.
          </p>
          <br />
          <p className="text-gray-800 md:text-xl  text-justify leading-4">
            We created Ecoyaan to connect consumers, businesses, and
            sustainability experts. We want to make it easy and convenient for
            people to access eco-friendly products and services, learn and share
            best practices, and support sustainability initiatives.
          </p>
          <br />
          <p className="text-gray-800 md:text-xl  text-justify leading-4">
            As founders, we are not perfect, but we are passionate. We believe
            that every small step matters. Join us and be a part of the Ecoyaan
            community — together, we’ll make a difference.
          </p>
          <p className="text-gray-800 md:text-xl  text-justify leading-4">
            Connect with the founders on LinkedIn here:
            <span>
              <a className=" md:text-xl hover:underline text-blue-500 text-justify leading-4">
                Abhishek Rao
              </a>{" "}
              <SocialIcon url="https://linkedin.com/in/couetilc" />
              <a className=" md:text-xl  text-justify leading-4 hover:underline text-blue-500">
                Sarwan Singh
              </a>{" "}
              <SocialIcon url="https://linkedin.com/in/couetilc" />
            </span>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Story;
