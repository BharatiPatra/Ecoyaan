import React from "react";

const HomeImage = ({ h1, p1, p2, src, isBtn = false, isVideo = false }) => {
  return (
    <div className="flex flex-wrap ">
      <div className="w-full md:w-1/2 h-auto leading-10">
        <h1 className="font-medium md:text-4xl text-gray-800">{h1} </h1>

        <br />
        <p className="text-lg md:text-xl text-justify text-gray-800">{p1}</p>
        <br />
        <p className="text-lg mb-4 md:text-xl text-justify text-gray-800">
          {p2}
        </p>
      </div>
      <div className="w-full md:w-1/2  flex justify-center ">
        {isVideo ? (
          <video
            className="h-[320px] w-full hover:scale-110 duration-150 "
            controls={false}
            autoPlay={true}
            muted
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={src}
            alt=""
            className="h-[320px] hover:scale-110 duration-150"
          />
        )}
      </div>
      {isBtn ? (
        <button className="px-4 py-3  rounded-md text-white text-lg bg-[#16a34a] cursor-pointer ">
          Contact Us
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomeImage;
