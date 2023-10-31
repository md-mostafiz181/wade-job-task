import React from "react";
import blogImg1 from "../../../assets/images/Blog-img-1.jpg";
import blogImg2 from "../../../assets/images/Blog-img-2.jpg";
import blogImg3 from "../../../assets/images/Blog-img-7.jpg";

import { FaAudible } from "react-icons/fa";
import "./Blog.css";
import Container from "../../../components/Container";

const Blog = () => {
  return (
    <div id="blog-part">
      <Container>
        <div>
          <div className="blog-tilte text-center">
            <p className="text-2xl text-orange-500 font-bold primaryFont">
              Latest News
            </p>
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl md:text-center sm:text-center font-bold primaryFont mt-2">
              Read daily news about startups <br /> and companies
            </h1>
            <p className="lg:text-2xl md:text-1xl sm:text-1xl md:text-center sm:text-center primaryFont mt-3 px-2">
              Occaecati doloribus et laborum magnam. Aut eaque enim quia vel.
              Soluta <br /> consequatur enim temporibus
            </p>
          </div>

          <div className="blog-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 px-4">
            <div className="blog-item " data-aos="fade-right">
              <div className="img">
                <img className=" rounded-lg" src={blogImg1} alt="" />
                <div className="overlay rounded-lg"></div>
              </div>

              <h2 className="lg:text-4xl md:text-2xl sm:text-2xl mt-5 font-bold primaryFont mb-2">
                Remote ideas worth spreading.
              </h2>
              <p className="lg:text-1xl md:text-1xl sm:text-1xl mt-3 ">
                Aut facilis sint cum et sint suscipit vel praesentium. Ut
                similique laborum necessitatibus
              </p>

              <div className="flex">
                <FaAudible className="mt-[100px] text-orange-500"></FaAudible>
                <p className="lg:text-1xl md:text-1xl sm:text-1xl mt-24 ms-2 ">
                  {" "}
                  Marketing June 13, 2022
                </p>
              </div>
            </div>
            <div className="blog-item"  data-aos="fade-up">
              <div className="img">
                <img className=" rounded-lg" src={blogImg2} alt="" />
                <div className="overlay rounded-lg"></div>
              </div>

              <h2 className="lg:text-4xl md:text-2xl sm:text-2xl mt-5 font-bold primaryFont mb-2">
                Remote work isn’t a privilege
              </h2>
              <p className="lg:text-1xl md:text-1xl sm:text-1xl mt-3 ">
                Aut facilis sint cum et sint suscipit vel praesentium. Ut
                similique laborum necessitatibus
              </p>

              <div className="flex">
                <FaAudible className="mt-[100px] text-orange-500"></FaAudible>
                <p className="lg:text-1xl md:text-1xl sm:text-1xl mt-24 ms-2 ">
                  {" "}
                  Marketing June 13, 2022
                </p>
              </div>
            </div>
            <div className="blog-item" data-aos="fade-left">
              <div className="img">
                <img className=" rounded-lg" src={blogImg3} alt="" />
                <div className="overlay rounded-lg"></div>
              </div>

              <h2 className="lg:text-4xl md:text-2xl sm:text-2xl mt-5 font-bold primaryFont mb-2">
                Hiring for remote positions
              </h2>
              <p className="lg:text-1xl md:text-1xl sm:text-1xl mt-3 ">
                Aut facilis sint cum et sint suscipit vel praesentium. Ut
                similique laborum necessitatibus
              </p>

              <div className="flex">
                <FaAudible className="mt-[100px] text-orange-500"></FaAudible>
                <p className="lg:text-1xl md:text-1xl sm:text-1xl mt-24 ms-2 ">
                  {" "}
                  Marketing June 13, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
