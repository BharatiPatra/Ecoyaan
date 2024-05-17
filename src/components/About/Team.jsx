import React from "react";
import shruthi from "../../assets/shruthi.png";
import divya from "../../assets/divya.png";
import urmil from "../../assets/urmil.png";
import prashanith from "../../assets/prashanith.png";
import saiabhilash from "../../assets/saiabhilash.png";
import favicon from "../../assets/favicon.png";

const TeamMember = ({ img, name, media, p, isLink = false }) => {
  return (
    <div className="w-full md:w-[30%] max-h-max flex flex-col items-center shadow-xl md:shadow-none md:border-none border border-gray-200 rounded-lg">
      <div className="even:bg-[#f0f8ff]">
        <img
          src={img}
          alt=""
          className="object-fill  rounded-t-lg h-[100px] md:h-auto md:w-32 md:rounded-none md:rounded-s-lg hover:scale-110 duration-150  "
        />
      </div>

      <div className="p-6 flex flex-col items-center">
        <h3 className="mb-2 text-xl font-medium leading-tight ">{name}</h3>
        <h2 className="mb-2 text-xl font-medium leading-tight text-red-400">
          {media}
        </h2>
        <p className="mb-4 text-base text-justify text-gray-800 md:text-xl leading-4">
          {p}
        </p>
      </div>
    </div>
  );
};
const Team = () => {
  return (
    <div className="bg-[#fafaf5] p-5   w-[100vw]">
      <h1 className="font-semibold text-2xl md:text-4xl mb-2">Meet the Team</h1>

      <div className="  max-h-max flex flex-wrap gap-6 w-full">
        <TeamMember
          img={shruthi}
          name="SHRUTHI"
          media="SOCIAL MEDIA"
          p="Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business"
          isLink={true}
        />
        <TeamMember
          img={urmil}
          name="URMIL"
          media="SOCIAL MEDIA"
          p="Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business"
          isLink={true}
        />
        <TeamMember
          img={divya}
          name="DIVYA"
          media="UX DESIGN"
          p="Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on "
          isLink={true}
        />
        <TeamMember
          img={prashanith}
          name="PRASHANITH"
          media="ENGINEERING"
          p="Prashanith is our front-end engineer, who brings the UX designs to life"
        />
        <TeamMember
          img={saiabhilash}
          name="SAI ABHILASH"
          media="ENGINEERING"
          p="Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform"
        />
        <TeamMember
          img={favicon}
          name="???"
          media="TEAM ECOYAAN"
          p="This spot awaits you.
Check out our"
          isLink={true}
        />
      </div>
    </div>
  );
};

export default Team;
