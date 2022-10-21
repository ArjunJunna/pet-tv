import './videocard.css'

const VideoCard = ({video,cardDirection}) => {
  return (
   
      <div className="card__container vertical">
        <div className="card-header">
          <img
            src={video.thumbnailUrl}
            alt="productimage"
            className="card-image"
          />
          <span className="card-badge">{video.videoLength}</span>
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
            <p className="detail-subheading">{video.views} views · {video.releaseDate}</p>
          </div>
          <div className="card-footer">
            <div className="card-icons">
              <i className="bi bi-three-dots-vertical dots"></i>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default VideoCard;
