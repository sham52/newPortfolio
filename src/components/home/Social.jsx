import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/shamilaltunsk/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://discord.gg/MQmDAKY"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt" style={{ color: "" }}></i>
      </a>

      <a
        href="https://github.com/sham52"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://discord.gg/MQmDAKY"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i className="bx bxl-discord-alt"></i> */}
        <img
          src="src\assets\discord.png"
          alt="discord"
          className="home__social-img"
          style={{ width: "1.3rem" }}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCOI8aM3S3rOkDdWoq13oyyg"
        className="home__social-icon"
        target="_blank"
      >
        {/* <i className="bx bxl-youtube"></i> */}
        <img
          src="src\assets\youtube.png"
          alt="youtube"
          className="home__social-img"
        />
      </a>
    </div>
  );
};

export default Social;
