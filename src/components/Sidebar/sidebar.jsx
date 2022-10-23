import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import './sidebar.css';


const Sidebar = () => {

   const location = useLocation();

  return (
    <aside>
      <ul className="list">
        <li className={location.pathname === '/explore' ? `active--tab` : ''}>
          <Link to="/explore">
            <i className="bi bi-compass-fill"></i>
            Explore
          </Link>
        </li>
        <li className={location.pathname === '/playlist' ? `active--tab` : ''}>
          <Link to="/playlist">
            <i className="bi bi-folder-fill"></i>
            Playlists
          </Link>
        </li>
        <li className={location.pathname === '/likes' ? `active--tab` : ''}>
          <Link to="/likes">
            <i className="bi bi-hand-thumbs-up-fill"></i>
            Liked Videos
          </Link>
        </li>
        <li className={location.pathname === '/watchlater' ? `active--tab` : ''}>
          <Link to="/watchlater">
            <i className="bi bi-clock-fill"></i>
            Watch later
          </Link>
        </li>
        <li className={location.pathname === '/history' ? `active--tab` : ''}>
          <Link to="/history">
            <i className="bi bi-clock-history"></i>
            History
          </Link>
        </li>
        <li className={location.pathname === '/mockman' ? `active--tab` : ''}>
          <Link to="/mockman">MockAPI</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar