import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useUserData } from '../../context/userDataContext';
import { deleteFromHistoryData } from '../../utilities/js/dataHandlers/historyDataHandler';
import './video-card.css';

const DynamicVideoCard=({video})=>{
    const { auth: { token }} = useAuth();
    const { userDataDispatch } = useUserData();
    const navigate = useNavigate();
    const {pathName} = useLocation();
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
          </div>
          <div className="card-footer">
            <div className="card-icons">
              {pathName === '/history' && (
                <span
                  onClick={() =>
                    deleteFromHistoryData(video, token, userDataDispatch)
                  }
                >
                  <i class="bi bi-trash"></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default {DynamicVideoCard};