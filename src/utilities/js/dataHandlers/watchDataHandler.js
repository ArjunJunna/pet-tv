import axios from 'axios';
import { toast } from 'react-toastify';

const getWatchLaterData = async (token, userDataDispatch) => {
  try {
    const response = await axios.get('/api/user/watchlater', {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      userDataDispatch({
        type: 'WATCHLATER_DATA',
        payload: response?.data?.watchlater,
      });
    }
  } catch (error) {
    toast.error('Oops!!!Something went wrong...');
  }
};

const addToWatchLaterData = async (
  video,
  token,
  userDataDispatch,
  setIsInWatchLater
) => {
  try {
    const response = await axios.post(
      '/api/user/watchlater',
      { video },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      userDataDispatch({
        type: 'WATCHLATER_DATA',
        payload: response?.data?.watchlater,
      });
      setIsInWatchLater(false);
      toast.success('You have added video to watch later!!!');
    }
  } catch (error) {
    toast.error('Oops!!!Something went wrong...');
  }
};

const deleteFromWatchLaterData = async (
  video,
  token,
  userDataDispatch,
  setIsInWatchLater
) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      userDataDispatch({
        type: 'WATCHLATER_DATA',
        payload: response?.data?.watchlater,
      });
      setIsInWatchLater(false);
      toast.success('You have removed video from watch later list...');
    }
  } catch (error) {
    console.log(error);
  }
};

export { getWatchLaterData, addToWatchLaterData, deleteFromWatchLaterData };
