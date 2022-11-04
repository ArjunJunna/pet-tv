import {
  addVideoToPlaylistData,
  deleteVideoFromPlaylistData,
} from '../../utilities/js/dataHandlers/playlistDataHandler';

import './playlist-modal.css';
import '../../utilities/css/util.css';

const Checkbox=({ playlist, video, token, userDataDispatch })=>{
  const inPlaylist = playlist.videos.find(item => item._id === video._id);

  const playlistDataHandler = () => {
    inPlaylist? 
    deleteVideoFromPlaylistData(playlist, video, token, userDataDispatch)
      : 
    addVideoToPlaylistData(playlist, video, token, userDataDispatch);
  };
  return (
    <>
      <ul>
        <li>
          <input
            onClick={playlistDataHandler}
            id={playlist._id}
            type="checkbox"
            defaultChecked={inPlaylist?.id === video.id}
          />
          <label htmlFor={playlist._id}>{playlist.playlistTitle}</label>
        </li>
      </ul>
    </>
  );
}

export default Checkbox;
