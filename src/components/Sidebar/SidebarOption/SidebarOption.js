import React from "react";
import "./SidebarOption.css";
import { useStateValue } from "../../../provider/StateProvider";

function SidebarOption({ option = "test", Icon, id = 'null', spotify }) {
  const [dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${id}`,
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
      });
  };

  return (
    <div className="sidebarOption" onClick={() => playPlaylist(id)} >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;
