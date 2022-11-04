import { useAuth } from '../../context/authContext';
import { useUserData } from '../../context/userDataContext';
import { useNavigate } from 'react-router-dom';
import { deletePlaylistFromData } from '../../utilities/js/dataHandlers/playlistDataHandler';
import './videocard.css';
import '../../utilities/css/util.css';

const PlaylistCard = ({ playlist }) => {
  const { playlistTitle, videos, _id } = playlist;
  const {auth: { token }} = useAuth();
  const { userDataDispatch } = useUserData();
  const navigate = useNavigate();
  return (
    <>
      <div className="card__container vertical">
        <div onClick={() => navigate(`/playlist/${_id}`)}>
          <div className="card-header">
           {videos[0]? (
            <img
              src={videos[0].thumbnailUrl}
              alt={`${playlistTitle} thumbnail`}
              className="card-image"
            />
            ):(
            <div className="fall-header">NO VIDEO IN PLAYLIST</div>)}
            {videos[0] && (
              <span className="playlist__count">{videos.length}</span>
            )}
          </div>
        </div>
        <div className="card-content">
          <div className="card-details">
            <h2 className="detail-heading m-left">{playlistTitle}</h2>
          </div>
          <div className="card-footer">
            <div className="card-icons">
              <i
                className="bi bi-trash dots"
                onClick={() =>
                  deletePlaylistFromData(playlist, token, userDataDispatch)
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistCard;
