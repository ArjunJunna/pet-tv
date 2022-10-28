import React from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/dataContext';
import { useUserData } from '../../context/userDataContext';
import { useAuth } from '../../context/authContext';
import { addToHistoryData } from '../../utilities/js/dataHandlers/historyDataHandler';
import ReactPlayer from 'react-player/youtube';
import '../../utilities/css/util.css';
import './videoplayer.css';

const VideoPlayer = () => {
  const {data:{ videoData }} = useDataContext();
  const {userData: { historyData },userDataDispatch, } = useUserData();
  const {auth: { token }} = useAuth();
  const videoRef = useRef();
  const { youtubeId } = useParams();

  const video = videoData.find(video => video.youtubeId === youtubeId);
  console.log(youtubeId);
  return (
    <>
      <div className="single-video-container video">
        <div className="video__player">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${youtubeId}`}
            controls={true}
            width="100%"
            height="500px"
            playing={true}
            ref={videoRef}
            onStart={addToHistoryData(video, token, userDataDispatch)}
  />
        </div>
        <div className="video__header">
          <div className="video__title">{video.title}</div>
          <div className="video__details">
            <div className="video__numbers">
              {video.views} views · {video.releaseDate}
            </div>
            <div className="video__action">
              <button>
                <i className="bi bi-hand-thumbs-up-fill"></i>
              </button>
              <button>
                <i className="bi bi-clock-fill"></i>
              </button>
              <button>
                <i className="bi bi-folder-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="video__body">
          <img
            src={video.channelImg}
            alt="person"
            className="avatar-small circle"
          />
          <div>
            <div className="video__body-heading">{video.channelName}</div>
            <div className="video__body-disc">{video.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
