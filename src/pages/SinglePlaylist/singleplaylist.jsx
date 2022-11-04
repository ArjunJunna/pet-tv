import { useUserData } from '../../context/userDataContext';
import { useParams } from 'react-router-dom';
import DynamicVideoCard from '../../components/VideoCard/dynamicvideocard';
import '../../utilities/css/util.css';

const SinglePlaylist = () => {
    const {
      userData: { playlistData },
    } = useUserData();
    const { playlistId } = useParams();
    const playlist = playlistData.find(playlist => playlist._id === playlistId);
    const videos = playlist.videos;

  return (
    <>
      {videos.length ? (
        <>
          <div className="info">
            <p>Created Playlists</p>
          </div>

          <div className="main__container-content">
            <>
              {videos.map(video => (
                <DynamicVideoCard video={video} playlist={playlist} />
              ))}
            </>
          </div>
        </>
      ) : (
        <>
          <p className="fall-back-text">
            You are yet to add a video in {playlist.playlistTitle}...
          </p>
        </>
      )}
    </>
  );
}

export default SinglePlaylist