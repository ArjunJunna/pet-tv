import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Checkbox from './checkbox';
import { useAuth } from '../../context/authContext';
import { useUserData } from '../../context/userDataContext';
import { addPlaylistToData } from '../../utilities/js/dataHandlers/playlistDataHandler';
import './playlist-modal.css';

const PlaylistModal = ({
  showModal,
  setShowModal,
  setViewModal,
  viewModal,
  video,
}) => {
    const {auth: { token }} = useAuth();
    const {userData: { playlistData },userDataDispatch} = useUserData();
    const [showInputBox, setShowInputBox] = useState(false);
    const [playlist, setPlaylist] = useState({ id: '', playlistTitle: '' });

    const modalCloseHandler = () => {
      if (showModal) {
        setShowModal(false);
      } else {
        setViewModal(false);
      }
    };

    const createPlaylistHandler = () => {
      if (playlist.playlistTitle) {
        addPlaylistToData(playlist, token, userDataDispatch);
        setPlaylist({ _id: '', playlistTitle: '' });
        setShowInputBox(prev => !prev);
      }
    };
  return (
    <>
      {(showModal || viewModal) && (
        <div className="modal">
          <div className="modal__card">
            <div className="modal__header">
              <h1>Add to Playlist</h1>
              <i className="bi bi-x" onClick={modalCloseHandler}></i>
            </div>

            <div className="modal__form">
              <div className="input-group"></div>
              {playlistData.length ? (
                <div className="modal__input">
                  {playlistData.map(playlist => {
                    return (
                      <Checkbox
                        playlist={playlist}
                        video={video}
                        key={playlist._id}
                        token={token}
                        userDataDispatch={userDataDispatch}
                      />
                    );
                  })}
                </div>
              ) : /*null*/(
                <div className="modal__placeholder">No playlist exists...</div>
              )}
              {showInputBox && (
                <div className="text-primary">
                  <input
                    placeholder="Enter a new playlist..."
                    onChange={e =>
                      setPlaylist({
                        _id: uuid(),
                        playlistTitle: e.target.value,
                      })
                    }
                    value={playlist.playlistTitle}
                  />
                </div>
              )}
              {!showInputBox ? (
                <button
                  className="text-primary"
                  onClick={() => setShowInputBox(prev => !prev)}
                >
                  <i className="bi bi-plus-lg"></i>
                  <h2>Create new playlist</h2>
                </button>
              ) : (
                <button
                  className="text-primary"
                  onClick={createPlaylistHandler}
                >
                  <i className="bi bi-plus-lg"></i>
                  <h2>Create</h2>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistModal;
