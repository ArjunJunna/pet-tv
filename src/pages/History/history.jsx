import React from 'react';
import { useUserData } from '../../context/userDataContext';
import DynamicVideoCard from '../../components/VideoCard/dynamicvideocard';
import { useAuth } from '../../context/authContext';
import { deleteAllHistoryData } from '../../utilities/js/dataHandlers/historyDataHandler';
import '../../utilities/css/util.css';

const History = () => {
  const {
    auth: { token },
  } = useAuth();
  const {
    userData: { historyData },
    userDataDispatch,
  } = useUserData();

  return (
    <>
     {historyData.length ? (
      <>
      <div className="info">
        <p>Watched Video History</p>
        <span
          onClick={() => {
            deleteAllHistoryData(token, userDataDispatch);
            console.log('delete clicked!!!');
          }}
        >
          <i className="bi bi-trash-fill dots"></i>
          Clear History
        </span>
      </div>

     
      <div className="main__container-content">
        
          <>
            {historyData.map(video => (
              <DynamicVideoCard video={video} />
            ))}
          </>
      </div>
      </>
        ) : (
          <>
            <p className='fall-back-text'>No videos in your history...</p>
          </>
        )}
    </>
  );
};

export default History;
