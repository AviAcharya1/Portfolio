import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item1">
          <span>Copyright </span>
          <FaCopyright />
          <span> {new Date().getFullYear()}All Rights Reserved.</span>
        </div>
        <div className="item2">
          <a href="https://github.com/AviAcharya1" >
            <FaGithub />
          </a>
        </div>
        <div className="item3">
          <a href="https://www.linkedin.com/in/avinash-s-181672200" >
            <FaLinkedin />
          </a>
        </div>
        <div className="item4">
          <a href="https://www.instagram.com/_mr.peacer_/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;