import React from 'react'
import { useUserData } from '../../context/userDataContext';
import PlaylistCard from '../../components/VideoCard/playlistcard';
import '../../utilities/css/util.css';

const Playlist=()=>{
  const {userData: { playlistData }} = useUserData();
  return (
    <>
      {playlistData.length ? (
        <>
          <div className="info">
            <p>Your Playlists</p>
          </div>

          <div className="main__container-content">
            <>
              {playlistData.map(playlist => (
                <PlaylistCard key={playlist._id} playlist={playlist} />
              ))}
            </>
          </div>
        </>
      ) : (
        <>
          <p className="fall-back-text">You are yet to create a playlist...</p>
        </>
      )}
    </>
  );
}

export default Playlist