import React, { useContext } from "react";
import "../style/Playlist.css";
import { dataContext } from "../Wraper";

const Songlist = () => {
  const {
    allsonglist,
    currentIndex,
    setCurrentIndex,
    isPlaying,
    setIsPlaying,
    currentSong,
  } = useContext(dataContext);

  const handleSongClick = (index) => {
    if (index === currentIndex) {
      // agar wahi song hai to sirf play/pause toggle
      setIsPlaying((prev) => !prev);
    } else {
      // naya song select hua
      setCurrentIndex(index);
      setIsPlaying(true);
    }
  };

  const songplaylist = allsonglist?.map((e, index) => {
    const isCurrent = index === currentIndex;

    return (
      <div
        key={e.id}
        className={`songlist ${isCurrent ? "active-song" : ""}`}
      >
        <div className="banner">
          <img src={e.cover} alt="" className="image" id="cover" />
          <span id="title">{e.title}</span>
        </div>

        <img
          src={
            isCurrent && isPlaying
              ? "/circle-pause-solid-full.svg"
              : "/circle-play-solid-full.svg"
          }
          alt=""
          className="image btnimg"
          onClick={() => handleSongClick(index)}
        />
      </div>
    );
  });

  return (
    <div className="Songlist">
      <div className="leftcard">
        <h3>Now Playing</h3>
        <img
          src={
            currentSong?.cover ||
            "https://placehold.co/300x300?text=No+Cover"
          }
          alt=""
        />
        <div>
          <span>Title :</span>
          <span>{currentSong?.title || "—"}</span>
        </div>
        <div>
          <span>Mood :</span>
          <span>{currentSong?.mood || "—"}</span>
        </div>
      </div>

      <div className="rightcard">{songplaylist}</div>
    </div>
  );
};

export default Songlist;
