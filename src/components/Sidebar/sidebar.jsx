import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import './sidebar.css';


const Sidebar = () => {

   const location = useLocation();

  return (
    <aside className="sidebar">
      <ul className="list">
        <li className={location.pathname === '/explore' ? `active--tab` : ''}>
          <Link to="/explore">
            <i className="bi bi-compass-fill"></i>
            <span>Explore</span>
          </Link>
        </li>
        <li className={location.pathname === '/playlist' ? `active--tab` : ''}>
          <Link to="/playlist">
            <i className="bi bi-folder-fill"></i>
            <span>Playlists </span>
          </Link>
        </li>
        <li className={location.pathname === '/likes' ? `active--tab` : ''}>
          <Link to="/likes">
            <i className="bi bi-hand-thumbs-up-fill"></i>
            <span>Liked Videos</span>
          </Link>
        </li>
        <li
          className={location.pathname === '/watchlater' ? `active--tab` : ''}
        >
          <Link to="/watchlater">
            <i className="bi bi-clock-fill"></i>
            <span>Watch later</span>
          </Link>
        </li>
        <li className={location.pathname === '/history' ? `active--tab` : ''}>
          <Link to="/history">
            <i className="bi bi-clock-history"></i>
            <span>History</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar