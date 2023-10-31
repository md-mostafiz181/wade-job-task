import React from "react";
import innerImg1 from "../../../assets/images/business-inner1.jpg";
import innerImg2 from "../../../assets/images/business-inner2.jpg";
import "./Business.css";
import Container from "../../../components/Container";

const Business = () => {
  return (
    <Container>
      <div id="business-part">
        <h2 className="lg:text-2xl md:text-1xl sm:text-1xl font-bold primaryFont text-orange-500 text-center" data-aos="fade-up">
          Our Service
        </h2>

        <h1 className="lg:text-5xl md:text-2xl sm:text-1xl font-bold primaryFont text-center mt-3 " data-aos="fade-up">
          Plan in front program for your small <br /> startup business
        </h1>

        <p className="lg:text-2xl md:text-2xl sm:text-1xl lg:text-center md:text-center sm:text-center mt-4 px-3" data-aos="fade-up">
          Occaecati doloribus et laborum magnam. Aut eaque enim quia vel. <br />{" "}
          Soluta consequatur enim temporibus cumque commodi tempora <br /> est
          tempora odio.
        </p>

        <div className="business-main px-5 mt-4" data-aos="fade-up">
          <video
            className="rounded-lg"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            playsInline
            poster="https://wade.qodeinteractive.com/wp-content/uploads/2022/06/business-main.jpg"
          >
            <source src="https://wade.qodeinteractive.com/wp-content/uploads/2022/07/20220720-111009-134-1.mp4"></source>
          </video>

          <div className="inner-one hidden md:block">
            <img className="rounded-lg " src={innerImg1} alt="" />
          </div>

          <div className="inner-two hidden md:block">
            <img className="rounded-lg" src={innerImg2} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Business;
