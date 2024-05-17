import React from "react";
import bottle from "../../assets/bottle.png";
import Authenticity from "../../assets/Authenticity.png";
import Impact from "../../assets/Impact.png";
import mark from "../../assets/mark.png";
const Values = () => {
  return (
    <div className="bg-[#fafaf5] w-[100vw] max-h-max p-5  ">
      <h1 className="font-semibold text-2xl md:text-4xl mb-2 ">Our Values</h1>

      <div className="w-auto m-auto flex flex-wrap ">
        {values.map((d) => (
          <div className="flex flex-col md:flex-row items-center  md:w-1/2">
            <img
              className="md:object-cover w-full  h-full md:h-24 md:w-24 hover:scale-110 duration-150 order-1 md:order-none"
              src={d.img}
              alt=""
            />
            <div className="flex">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {d.h3}
                </h3>
                <p className="mb-3 font-normal  text-gray-800 md:text-xl  text-justify leading-4">
                  {d.p}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
const values = [
  {
    img: bottle,
    h3: `Trust`,
    p: `We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.`,
  },
  {
    img: Authenticity,
    h3: `
    Authenticity`,
    p: `We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.`,
  },
  {
    img: Impact,
    h3: `Impact`,
    p: `We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.`,
  },
  {
    img: mark,
    h3: `
    Fun & Engaging`,
    p: `Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.`,
  },
];
