import React, { useContext, useEffect, useRef, useState } from "react";
import "../style/MusicPlayer.css";
import { dataContext } from "../Wraper";

const MusicPlayer = () => {
  const {
    allsonglist,
    currentIndex,
    setCurrentIndex,
    isPlaying,
    setIsPlaying,
    currentSong,
  } = useContext(dataContext); // 👈 yahan se sab aa raha hai

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "00:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  useEffect(() => {
    if (!allsonglist || allsonglist.length === 0) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(allsonglist[currentIndex].audio);
    } else {
      audioRef.current.src = allsonglist[currentIndex].audio;
      audioRef.current.load();
    }

    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setCurrentTime(0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      nextSong(); // song khatam -> next
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex, allsonglist]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying]);

  const playPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    if (!allsonglist || allsonglist.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % allsonglist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (!allsonglist || allsonglist.length === 0) return;
    setCurrentIndex((prev) =>
      prev === 0 ? allsonglist.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const value = Number(e.target.value);
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="MusicPlayer">
      <center>
        <div className="seekbar">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
          />
          <span>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <div>
            <strong>{currentSong?.title || "No Song"}</strong>
          </div>
        </div>
      </center>

      <div className="controls">
        <img onClick={prevSong} src="/backward-step-solid-full.svg" alt="" />
        <img onClick={prevSong} src="/backward-solid-full.svg" alt="" />

        <img
          onClick={playPause}
          src={
            isPlaying
              ? "/circle-pause-solid-full.svg"
              : "/circle-play-solid-full.svg"
          }
          alt=""
        />

        <img onClick={nextSong} src="/forward-solid-full.svg" alt="" />
        <img onClick={nextSong} src="/forward-step-solid-full.svg" alt="" />
      </div>
    </div>
  );
};

export default MusicPlayer;
