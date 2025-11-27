import React, { useContext, useEffect, useRef, useState } from "react";
import "../style/MusicPlayer.css";
import { dataContext } from "../Wraper";

const MusicPlayer = () => {
  const [allsonglist] = useContext(dataContext);   // Song list array
  const [currentIndex, setCurrentIndex] = useState(0); // कौन सा song चल रहा है
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(allsonglist[0]?.audio)); // initial audio

  // जब song बदले → new audio load करो
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(allsonglist[currentIndex]?.audio);
    if (isPlaying) audioRef.current.play();
  }, [currentIndex]);

  // जब play / pause बदलें
  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying]);


  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % allsonglist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allsonglist.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  return (
    <div className="MusicPlayer">
      <center>
        <div className="seekbar">
          <input type="range"  readOnly />
          <span>{allsonglist[currentIndex]?.title}</span>
        </div>
      </center>

      <div className="controls">
        <img onClick={prevSong} src="/backward-step-solid-full.svg" alt="" />
        <img onClick={prevSong} src="/backward-solid-full.svg" alt="" />

        <img
          onClick={playPause}
          src={isPlaying ? "/circle-pause-solid-full.svg" : "/circle-play-solid-full.svg"}
          alt=""
        />

        <img onClick={nextSong} src="/forward-solid-full.svg" alt="" />
        <img onClick={nextSong} src="/forward-step-solid-full.svg" alt="" />
      </div>
    </div>
  );
};

export default MusicPlayer;
