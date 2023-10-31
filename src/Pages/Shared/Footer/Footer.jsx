import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo (2).png"
import Container from "../../../components/Container";
import { FaSkype, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer-part" >
        {/* <div className="overlay"></div> */}
      <Container>
        <footer className="footer footer-info p-10   text-base-content" data-aos="zoom-in">
          <aside>
            <img className="w-[200px] h-[50px]" src={logo} alt="" />


            <p className="text-white font-bold text-3xl">
              WA<span className="text-orange-500">DE</span> Industries Ltd.
              <br />
               Tech since 1992
            </p>

            <p className="text-1xl text-white font-bold ">wadehire@gmail.com</p>
          </aside>
          <nav>
            <header className=" text-white text-3xl font-bold primaryFont">Services</header>
            <a className="text-white font-bold text-1xl hover:text-orange-500 transition-all cursor-pointer primaryFont mt-3">Branding</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500 transition-all cursor-pointer primaryFont">Design</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont">Marketing</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont">Advertisement</a>
          </nav>
          <nav>
            <header className="text-white text-3xl font-bold primaryFont">Company</header>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont mt-3">About us</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont">Contact</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont">Jobs</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont">Press kit</a>
          </nav>
          <nav>
            <header className="text-white text-3xl font-bold primaryFont">Legal</header>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont mt-3">Terms of use</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500 transition-all cursor-pointer primaryFont">Privacy policy</a>
            <a className="text-white font-bold text-1xl hover:text-orange-500  transition-all cursor-pointer primaryFont">Cookie policy</a>

            <div className="icon-box flex justify-center gap-1">
              
              <div className="icon w-[40px] h-[40px] bg-blue-600 text-white flex items-center  justify-center rounded text-3xl">
              <FaTwitter></FaTwitter>
              </div>

              <div className="icon w-[40px] h-[40px] bg-blue-600 text-white flex items-center  justify-center rounded text-3xl">
              <FaTelegram></FaTelegram>
              </div>

              <div className="icon w-[40px] h-[40px] bg-blue-600 text-white flex items-center  justify-center rounded text-3xl">
              <FaSkype></FaSkype>
              </div>
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
