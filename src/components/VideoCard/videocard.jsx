import './videocard.css';
import { getTrimmedViewCount } from '../../utilities/js/getTrimmedViewCount';
import { useNavigate,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import {addToWatchLaterData,deleteFromWatchLaterData} from '../../utilities/js/dataHandlers/watchDataHandler'
import {useUserData} from '../../context/userDataContext'

const VideoCard = ({ video}) => {
  const navigate = useNavigate();

  const{_id,title,youtubeId,thumbnailUrl,videoLength,channelImg,channelName,views,releaseDate}=video;

  const {auth: { token,isAuthorized }} = useAuth();
  const {userData: { watchlaterData },userDataDispatch } = useUserData();
  const [showActionCard, setShowActionCard] = useState(false);
  const [isInWatchLater, setIsInWatchLater] = useState(false);

  useEffect(() => {
    watchlaterData.find(video => video._id === _id) && setIsInWatchLater(true);
  }, [watchlaterData, _id]);

  return (
    <div className="card__container vertical">
      <div onClick={() => navigate(`/videoplayer/${youtubeId}`)}>
        <div className="card-header">
          <img src={thumbnailUrl} alt="productimage" className="card-image" />
          <span className="card-badge">{videoLength}</span>
        </div>
      </div>
      <div className="card-content">
        <img src={channelImg} alt="person" className="avatar-small circle" />
        <div className="card-details">
          <h2 className="detail-heading">{title}</h2>
          <p className="detail-subheading">{channelName}</p>
          <p className="detail-subheading">
            {getTrimmedViewCount(views)} views · {releaseDate}
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
                <div
                  className="action--option"
                  onClick={() => {
                    isInWatchLater
                      ? deleteFromWatchLaterData(
                          video,
                          token,
                          userDataDispatch,
                          setIsInWatchLater
                        )
                      : addToWatchLaterData(
                          video,
                          token,
                          userDataDispatch,
                          setIsInWatchLater
                        );
                  }}
                >
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

