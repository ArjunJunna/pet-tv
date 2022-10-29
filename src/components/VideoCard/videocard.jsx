import './videocard.css';
import { getTrimmedViewCount } from '../../utilities/js/getTrimmedViewCount';
import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

const VideoCard = ({ video, cardDirection }) => {
  const navigate = useNavigate();

  const {
    auth: { isAuthorized },
  } = useAuth();
  const [showActionCard, setShowActionCard] = useState(false);
  console.log(video.youtubeId)
  return (
    <div className="card__container vertical">
      <div onClick={() => navigate(`/videoplayer/${video.youtubeId}`)}>
        <div className="card-header">
          <img
            src={video.thumbnailUrl}
            alt="productimage"
            className="card-image"
          />
          <span className="card-badge">{video.videoLength}</span>
        </div>
      </div>
      <div className="card-content">
        <img
          src={video.channelImg}
          alt="person"
          className="avatar-small circle"
        />
        <div className="card-details">
          <h2 className="detail-heading">{video.title}</h2>
          <p className="detail-subheading">{video.channelName}</p>
          <p className="detail-subheading">
            {getTrimmedViewCount(video.views)} views · {video.releaseDate}
          </p>
        </div>
        <div className="card-footer">
          <div className="card-icons">
            <i
              className="bi bi-three-dots-vertical dots"
              onClick={() => {
                isAuthorized
                  ? setShowActionCard(prev => !prev)
                  : navigate('/login');
              }}
            ></i>
            {showActionCard && (
              <div className={`${showActionCard} action--card`}>
                <div className="action--option">
                  <i className="bi bi-clock-fill"></i>
                  Watch Later
                </div>
                <div className="action--option">
                  <i className="bi bi-folder-fill"></i>Playlist
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

