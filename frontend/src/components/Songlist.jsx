import React, { useContext } from 'react';
import '../style/Playlist.css';
import { dataContext } from '../Wraper';

const Songlist = () => {
  const [allsonglist, setallsonglist] = useContext(dataContext);

  const songplaylist = allsonglist?.map((e) => {
    return (
      <div key={e.id} className="songlist">
        <div className="banner">
          <img src={e.cover} alt="" className="image" id="cover" />
          <span id="title">{e.title}</span>
        </div>

        <img
          src="/circle-play-solid-full.svg"
          alt=""
          className="image btnimg"
        />
      </div>
    );
  });

  return (
    <div className="Songlist">
      <div className="leftcard">
        <h3>Now Playing</h3>
        <img
          src="https://ik.imagekit.io/xty8dm9bn/CoverPhoto/saiyaara_edwfXoiHF.jpg"
          alt=""
        />
        <div>
          <span>Title :</span>
          <span>Saiyaara</span>
        </div>
        <div>
          <span>Mood :</span>
          <span>Happy</span>
        </div>
      </div>

      <div className="rightcard">
        {songplaylist}
      </div>
    </div>
  );
};

export default Songlist;
