import React from "react";
// import aboutImg from "../../../assets/images/about.jpg";
import Container from "../../../components/Container";

const About = () => {
  return (
    <Container>
      <div className="py-4 px-4 bg-[#fdfaf0] rounded-lg">
        <div className="about-container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
          <div className="about-left w-full  lg:w-full" data-aos="fade-right">
            <h2 className="p-5 text-4xl primaryFonts font-bold primaryTextColor">
              What we do
            </h2>
            <h3 className="p-5 text-2xl primaryFonts text-black">
              15 Lessons About STURTUP You Need To Learn To Succeed
            </h3>
            <h4 className="p-5 mt-20 text-3xl primaryFonts font-bold">
              SEO<span className="text-orange-500">GURU</span>
            </h4>
            <p className="px-4 text-4xl primaryFonts primaryTextColor font-bold">
              Cristina Durgan
            </p>
          </div>
          <div className="about-right w-full lg:w-full" data-aos="fade-left">
            <div className="image">
              {/* <img src={aboutImg} alt="" /> */}
              <video className="rounded-lg" autoPlay="autoplay" loop="loop" muted="muted" playsInline>
                <source src="https://wade.qodeinteractive.com/wp-content/uploads/2022/07/20220720-110809-597-1.mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
