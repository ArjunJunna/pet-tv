import React from 'react'
import '../../utilities/css/util.css'
import Filter from '../../components/Filter/filter'
import VideoCard from '../../components/VideoCard/videocard'
import { useDataContext } from '../../context/dataContext'

const Explore=()=>{
  const {data: { videoData, selectedCategory }} = useDataContext();

  const filteredData = () => {
    if (selectedCategory === 'All') {
      return videoData;
    } else {
      return videoData.filter(video => selectedCategory === video.categoryName);
    }
  };

  return (
    <>
      <Filter />
      <div className="main__container-content">
        {filteredData().map(video => (
          <VideoCard video={video} />
        ))}
      </div>
    </>
  );
}

export default Explore