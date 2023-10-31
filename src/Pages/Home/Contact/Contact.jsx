import React from "react";
import Container from "../../../components/Container";
import contactImg from "../../../assets/images/contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-part">
      <Container>
        <h2 className="lg:text-3xl md:2xl sm:2xl font-bold primaryFont text-orange-500 text-center">
          Contact
        </h2>
        <p className="lg:text-2xl md:1xl sm:1xl primaryFont text-center">
          Want to get touch? We'd love to here from you. <br /> Here's how you
          can reach us.
        </p>

        <div className="contact-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 px-2 mt-5">
          <div className="contact-item px-3 py-5">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact-item px-3 py-3 bg-orange-300 rounded-lg mb-36">
            <div className="flex items-center justify-center">
              <input
                className="w-3/4 px-2 py-4 rounded"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name....."
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                className="w-3/4 my-2 px-2 py-4 rounded"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email......"
              />
            </div>
            <div className="flex items-center justify-center">
              <textarea
                className="w-3/4 my-2 px-2 py-4 rounded"
                name="text-area"
                id="area"
                cols="30"
                rows="10"
                placeholder="Enter your opninion...."
              ></textarea>
            </div>

           <div className="flex justify-center items-center">
             <button className="btn btn-submit py-2 px-5 font-bold primayFont">Submit</button>
           </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
