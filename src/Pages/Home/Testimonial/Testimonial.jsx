import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Container from "../../../components/Container";

import "./Testimonial.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div id="testimonial-part">
      <div className="overlay"></div>
      <Container>
        <div className="testimonial-container lg:grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2">
          <div className="item1 px-3 py-5 ">
            <h3 className="lg:text-3xl primaryFont font-bold text-white md:text-2xl sm:text-2xl">
              Connect With <br /> Other Members
            </h3>
            <p className="lg:text-2xl md:text-1xl sm:text-1xl primaryFont text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod et
              quis sunt expedita consequuntur reprehenderit. Ad tempore rem
              beatae nam?
            </p>
          </div>
          <div className="item2 px-3 py-5 bg-white rounded-lg">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="mt-10 px-14 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <img className="w-[60px] h-[60px] rounded-full border" src={review.img} alt="" />
                    </div>
                    <div className="flex items-center justify-center">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={3}
                        readOnly
                      ></Rating>
                    </div>

                    <p className="primaryFont my-2">{review.details}</p>
                    <h2 className="text-3xl font-bold primaryFont text-orange-500 ">
                      {review.name}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
