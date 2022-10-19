import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';


const Sidebar = () => {
  return (
    <aside>
      <ul className="list">
        <li>
          <Link to="/explore">
            <i className="bi bi-compass-fill"></i>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/playlist">
            <i className="bi bi-folder-fill"></i>
            Playlists
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <i className="bi bi-hand-thumbs-up-fill"></i>
            Liked Videos
          </Link>
        </li>
        <li>
          <Link to="/watchlater">
            <i className="bi bi-clock-fill"></i>
            Watch later
          </Link>
        </li>
        <li>
          <Link to="/history">
            <i className="bi bi-clock-history"></i>
            History
          </Link>
        </li>
        <li>
          <Link to="/mockman">
            
            MockAPI
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar