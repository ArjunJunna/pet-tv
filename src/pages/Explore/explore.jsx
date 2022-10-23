import React from 'react';
import '../../utilities/css/util.css';
import Filter from '../../components/Filter/filter';
import VideoCard from '../../components/VideoCard/videocard';
import { useDataContext } from '../../context/dataContext';
import {
  filteredCategoryData,
  filterBySearch,
} from '../../utilities/js/filterFunctions';
import Loader from '../../components/Loader/loader';

const Explore = () => {
  const {
    data: { videoData, selectedCategory, searchFor, isLoading },
  } = useDataContext();
  const filteredData = filterBySearch(
    filteredCategoryData(videoData, selectedCategory),
    searchFor
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter />
          <div className="main__container-content">
            {filteredData.map(video => (
              <VideoCard video={video} key={video._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Explore;
