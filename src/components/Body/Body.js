import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useStateValue } from "../../provider/StateProvider";
import SongRow from "./SongRow/SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body() {
  const [{ discover_weekly, spotify }, dispatch] = useStateValue();

  const playSong = (id) => {
    console.log(' playSong - id: ', id);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      })
      .catch((e) => {
        const error = JSON.parse(e.response).error.message
        alert(error)
      })
  }

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>ПЛЕЙЛИСТ</strong>
          <h2>Открытие недели</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => {
          return (
            <SongRow playSong={playSong} track={item.track} key={index} />
          )
        }

        )}
      </div>
    </div>
  );
}

export default Body;
