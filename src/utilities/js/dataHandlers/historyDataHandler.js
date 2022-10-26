import axios from 'axios';
import { toast } from 'react-toastify';

const getHistoryData = async (token, userDataDispatch) => {
  try {
    const response = await axios.get('/api/user/history', {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      userDataDispatch({
        type: 'HISTORY_DATA',
        payload: response?.data?.history,
      });
    }
  } catch (error) {
    toast.error('Oops!!!Something went wrong.');
  }
};

const addToHistoryData = async (video, token, userDataDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/history',
      { video },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 201) {
      userDataDispatch({
        type: 'HISTORY_DATA',
        payload: response?.data?.history,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteFromHistoryData = async (video, token, userDataDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/:${video._id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      userDataDispatch({
        type: 'HISTORY_DATA',
        payload: response?.data?.history,
      });
      toast.success('Video deleted from history...');
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteAllHistoryData = async (token, userDataDispatch) => {
  try {
    const response = await axios.delete('/api/user/history/all', {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      userDataDispatch({
        type: 'HISTORY_DATA',
        payload: response?.data?.history,
      });
      toast.success('Your history is cleared...');
    }
  } catch (error) {
    console.log(error);
  }
};

export {getHistoryData,addToHistoryData,deleteFromHistoryData,deleteAllHistoryData}
