import React from "react";
import "./Service.css";

import serviceImg from "../../../assets/images/service.jpg";
import serviceImg2 from "../../../assets/images/service2.png";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../../components/Container";

const Service = () => {
  return (
    <div id="service-part">
      <Container>
        <div className="service-container grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5"  >
          <div className="service-left px-5" data-aos="fade-right">
            <img className="rounded-lg" src={serviceImg} alt="" />

            <div className="service-inner">
              <img src={serviceImg2} alt="" />
            </div>
          </div>
          <div className="service-right px-5" data-aos="fade-left">
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl font-bold primaryFont text-white">
              Ready to kick off your startup journe
            </h1>

            <h3 className="lg:text-2xl md:text-1xl sm:text-1xl lg:text-left md:text-center sm:text-center text-white primaryFont mt-6">
              Occaecati doloribus et laborum magnam. Aut eaque enim quia vel.
              Soluta consequatur enim temporibus cumque commodi tempora est
              tempora odio.
            </h3>

            <div className="border w-full bg-white mt-5"></div>

            <p className="lg:text-2xl md:text-1xl sm:text-1xl primaryFont text-white font-bold flex mt-10">
              {" "}
              <FaArrowRight className="mt-1 text-orange-500 mr-1"></FaArrowRight>{" "}
              Awesome components
            </p>

            <p className="lg:text-2xl md:text-1xl sm:text-1xl primaryFont text-white font-bold mt-3 flex">
              {" "}
              <FaArrowRight className="mt-1 text-orange-500 mr-1"></FaArrowRight>{" "}
              Ready to use
            </p>

            <p className="lg:text-2xl md:text-1xl sm:text-1xl primaryFont text-white font-bold mt-3 flex">
              {" "}
              <FaArrowRight className="mt-1 text-orange-500 mr-1"></FaArrowRight>{" "}
              Awesome components
            </p>

            <p className="lg:text-2xl md:text-1xl sm:text-1xl primaryFont text-white font-bold mt-3 flex">
              {" "}
              <FaArrowRight className="mt-1 text-orange-500 mr-1"></FaArrowRight>{" "}
              Ready to use
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
