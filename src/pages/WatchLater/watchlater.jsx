import React from 'react'
import { useUserData } from '../../context/userDataContext';
import DynamicVideoCard from '../../components/VideoCard/dynamicvideocard';
import '../../utilities/css/util.css';


const WatchLater = () => {

  const {userData:{watchlaterData}}=useUserData();

  return (
    <>
      {watchlaterData.length ? (
        <>
          <div className="info">
            <p>Watch History</p>
          </div>

          <div className="main__container-content">
            <>
              {watchlaterData.map(video => (
                <DynamicVideoCard video={video} />
              ))}
            </>
          </div>
        </>
      ) : (
        <>
          <p className="fall-back-text">No videos in your history...</p>
        </>
      )}
    </>
  );
}

export default WatchLater