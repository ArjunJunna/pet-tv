import React from 'react'
import { useUserData } from '../../context/userDataContext'
import DynamicVideoCard from '../../components/VideoCard/dynamicvideocard'
import '../../utilities/css/util.css'

const Likes=()=>{

  const {userData:{likedData}}=useUserData();

  return (
    <>
      {likedData.length ? (
        <>
          <div className="info">
            <p>Watch History</p>
          </div>

          <div className="main__container-content">
            <>
              {likedData.map(video => (
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

export default Likes