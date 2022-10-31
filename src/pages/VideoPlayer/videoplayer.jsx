import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/dataContext';
import { useUserData } from '../../context/userDataContext';
import { useAuth } from '../../context/authContext';
import { addToHistoryData } from '../../utilities/js/dataHandlers/historyDataHandler';
import {
  addToLikedData,
  deleteFromLikedData,
} from '../../utilities/js/dataHandlers/likeDataHandler';
import {
  addToWatchLaterData,
  deleteFromWatchLaterData,
} from '../../utilities/js/dataHandlers/watchDataHandler';
import ReactPlayer from 'react-player/youtube';
import '../../utilities/css/util.css';
import './videoplayer.css';

const VideoPlayer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInWatchLater, setIsInWatchLater] = useState(false);

  const {data: { videoData }} = useDataContext();
  const {userData: { likedData, watchlaterData },userDataDispatch} = useUserData();
  const {auth: { token, isAuthorized }} = useAuth();
  const videoRef = useRef();
  const { youtubeId } = useParams();

  const video = videoData.find(video => video.youtubeId === youtubeId);

  const {
    title,
    channelName,
    channelImg,
    views,
    description,
    _id,
    releaseDate,
  } = video;

  useEffect(() => {
    likedData.find(video => video._id === _id) && setIsLiked(true);
    watchlaterData.find(video => video._id === _id) && setIsInWatchLater(true);
  }, [likedData, watchlaterData, _id]);

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
          <div className="video__title">{title}</div>
          <div className="video__details">
            <div className="video__numbers">
              {views} views · {releaseDate}
            </div>
            {isAuthorized && (
              <div className="video__action">
                <button
                  onClick={() => {
                    isLiked
                      ? deleteFromLikedData(
                          video,
                          token,
                          userDataDispatch
                        )
                      : addToLikedData(
                          video,
                          token,
                          userDataDispatch,
                          setIsLiked
                        );
                  }}
                >
                  {isLiked ? (
                    <i className="bi bi-hand-thumbs-up-fill icon-active"></i>
                  ) : (
                    <i className="bi bi-hand-thumbs-up-fill"></i>
                  )}
                </button>
                <button
                  onClick={() => {
                    isInWatchLater
                      ? deleteFromWatchLaterData(video, token, userDataDispatch)
                      : addToWatchLaterData(
                          video,
                          token,
                          userDataDispatch,
                          setIsInWatchLater
                        );
                  }}
                >
                  {isInWatchLater ? (
                    <i className="bi bi-clock-fill icon-active"></i>
                  ) : (
                    <i className="bi bi-clock-fill"></i>
                  )}
                </button>
                <button>
                  <i className="bi bi-folder-fill"></i>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="video__body">
          <img src={channelImg} alt="person" className="avatar-small circle" />
          <div>
            <div className="video__body-heading">{channelName}</div>
            <div className="video__body-disc">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
