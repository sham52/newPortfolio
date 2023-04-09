import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/shamilaltunsk/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://discord.gg/MQmDAKY"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt" style={{ color: "" }}></i>
      </a>

      <a
        href="https://github.com/sham52"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
