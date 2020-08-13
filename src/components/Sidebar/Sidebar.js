import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../../provider/StateProvider";

function Sidebar() {
  const [{ playlists, spotify }] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://medialeaks.ru/wp-content/uploads/2020/07/kh-spotify-768x432.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Главная" spotify={spotify} />
      <SidebarOption Icon={SearchIcon} option="Поиск" spotify={spotify} />
      <SidebarOption Icon={LibraryMusicIcon} option="Моя медиатека" spotify={spotify} />
      <br />
      <strong className="sidebar__title">ПЛЕЙЛИСТЫ</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => {
        return (
          <SidebarOption option={playlist.name} key={index} id={playlist.id} spotify={spotify} />
        )
      }
      )}
    </div>
  );
}

export default Sidebar;
