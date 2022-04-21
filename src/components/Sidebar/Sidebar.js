import React from "react";
import {
  MdOutlineWatchLater,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdOutlineExplore,
  MdHome,
  MdPlaylistAdd,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useVideos } from "../../contexts";
import "./Sidebar.css";

export const Sidebar = ({ sidebars, handleToggleSidebar }) => {
  const {videoState:{likedVideos, watchLater}}=useVideos();
  return (
    <aside
      className={sidebars ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={25} />
          <span>Home</span>
        </li>
      </Link>
      <Link to="/">
        <li>
          <MdOutlineExplore size={25} />
          <span>Explore</span>
        </li>
      </Link>
      <Link to="/playlists">
        <li>
          <MdPlaylistAdd size={25} />
          <span>Playlists</span>
        </li>
      </Link>
      <Link to="/watch-later">
        <li>
          <MdOutlineWatchLater size={25} />
          <span>Watch Later{" "} {watchLater.length}</span>
        </li>
      </Link>
      <Link to="/liked-videos">
        <li>
          <MdThumbUp size={25} />
          <span>Liked Videos{" "}{likedVideos.length}</span>
        </li>
      </Link>
      <Link to="/history">
        <li>
          <MdHistory size={25} />
          <span>History</span>
        </li>
      </Link>
      <hr />

      <li>
        <MdExitToApp size={25} />
        <span>Log Out</span>
      </li>

      <hr />
    </aside>
  );
};
