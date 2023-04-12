import React from "react";
import  './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shamil</h1>

        <ul className="footer__list">
          <li>
            <a href="" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/shamilaltunsk/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/%C5%9Famil-altun%C4%B1%C5%9F%C4%B1k-9a65a5235/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin" style={{ color: "" }}></i>
          </a>

          <a
            href="https://github.com/sham52"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://discord.gg/MQmDAKY"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-discord"></i>
            {/* <img
          src="src\assets\discord.png"
          alt="discord"
          className="home__social-img"
          style={{ width: "1.3rem" }}
        /> */}
          </a>
          <a
            href="https://www.youtube.com/channel/UCOI8aM3S3rOkDdWoq13oyyg"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-youtube"></i>
            {/* <img
              src="src\assets\youtube.png"
              alt="youtube"
              className="home__social-img"
            /> */}
          </a>
        </div>

        <span className="footer__copy">&#169; Shamil. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
