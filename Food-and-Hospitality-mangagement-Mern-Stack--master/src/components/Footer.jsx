import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="sticky-footer" className="bg-light text-dark-50">
      <div className="container py-1">
        <div className="row">
          <div className="col-md-6 col-12 my-auto">
            <small>Copyright &copy; MSWD Team90</small>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-flex float-right">
              <a href="https://www.facebook.com/hemanth.choudary.904">
                <FaFacebookSquare className="connect text-dark" />
              </a>
              <a href="https://www.linkedin.com/in/hemantdas9/">
                <FaLinkedin className="connect text-dark" />
              </a>
              <a href="https://www.instagram.com/hemanth_chowdary_9/">
                <AiFillInstagram className="connect text-dark" />
              </a>
              <a href="https://www.youtube.com/channel/UCkUDE0JzvGtyQfOs83pxjUAx">
                <IoLogoYoutube className="connect text-dark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
