import React from 'react'
import '../../utilities/css/util.css'
import Filter from '../../components/Filter/filter'
import VideoCard from '../../components/VideoCard/videocard'
import { useDataContext } from '../../context/dataContext'
import {
  filteredCategoryData,
  filterBySearch,
} from '../../utilities/js/filterFunctions';

const Explore=()=>{
  const {data: { videoData, selectedCategory,searchFor }} = useDataContext();
  const filteredData = filterBySearch(
    filteredCategoryData(videoData, selectedCategory),
    searchFor
  );

  return (
    <>
      <Filter />
      <div className="main__container-content">
        {filteredData.map(video => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
}

export default Explore