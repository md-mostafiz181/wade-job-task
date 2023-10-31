import React from "react";
import "./Banner.css";

const Banner = () => {


  return (
    <div className="banner-img" data-aos="fade-up">
      <div className="overlay"></div>

      <div className="banner-text w-full -mt-5">
        <div className="text-center">
          <h1 className="text-white lg:text-4xl md:text-3xl sm:text-1xl primaryFonts font-bold ">Build Your Own Life <span className="text-orange-500">Coaching Business</span></h1>
          <h3 className="text-white lg:text-2xl md:text-2xl sm:text-1xl primaryFonts font-bold mt-2">Start The Journey</h3>
          <p className="text-1xl  primaryFont text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur <br /> animi totam cum ipsum illo eaque alias <br /> cupiditate? Corrupti, obcaecati?</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
