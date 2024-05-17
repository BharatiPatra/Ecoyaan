import React from "react";
import HomeImageSlider from "./HomeimageSlider";
import HomeImage from "./HomeImage";
import Impact from "../../assets/Impact.png";
import ProductCuration from "../../assets/ProductCuration.mp4";
import OurStory4 from "../../assets/OurStory4.png";
const Home = () => {
  return (
    <div>
      <div>
        <HomeImageSlider />
      </div>
      <div
        className="mt-12 md:mt-24 mx-7 md:mx-20 my-14 md:my-20 flex 
      justify-center items-center"
      >
        <HomeImage
          h1="Join our community in creating a more sustainable future for everyone"
          p1="At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products."
          p2="Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment."
          src={Impact}
        />
      </div>
      <div className="mt-12 md:mt-24 md:mx-20 mx-7 my-14 md:my-20 flex  justify-center items-center">
        <HomeImage
          h1="Carefully curated Eco-friendly products"
          p1="We believe that every purchase you make can have a positive impact on the planet and the future."
          p2="Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits."
          src={ProductCuration}
          isVideo={true}
        />
      </div>
      <div className="mt-12 md:mt-24 mx-7 md:mx-20   my-14 md:my-20 flex  justify-center items-center">
        <HomeImage
          h1="For businesses that care deeply about sustainability
"
          p1="Do you run a business that is committed to sustainability in every aspect of your work?Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?"
          p2="If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:"
          isBtn={true}
          src={OurStory4}
        />
      </div>
    </div>
  );
};

export default Home;
