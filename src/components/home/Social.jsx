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
        href="https://www.linkedin.com/in/%C5%9Famil-altun%C4%B1%C5%9F%C4%B1k-9a65a5235/"
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
          alt="discord"
          src="src/assets/discord.png"
          className="home__social-img icon-dc"
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
          src="src/assets/youtube.png"
          alt="youtube"
          className="home__social-img icon-yt"
        />
      </a>
    </div>
  );
};

export default Social;
