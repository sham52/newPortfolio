import React, { useState, useRef } from "react";
import "./backgroundmusic.css";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".music__container");
    if (scrollY >= 560) scrollUp.classList.add("show__music-container");
    else scrollUp.classList.remove("show__music-container");
  });


  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  return (
    <section className="music__container">
      <i
        onClick={isPlaying ? handleStop : handlePlay}
        className={`bx ${isPlaying ? "bx-play" : "bx-pause"} bg__music-icon`}
      ></i>
      <audio ref={audioRef} src="/binksake.mp3" loop />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        className="slider"
        onChange={handleVolumeChange}
      />
    </section>
  );
};

export default BackgroundMusic;
