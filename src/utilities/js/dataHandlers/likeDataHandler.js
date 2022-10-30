import axios from 'axios'
import { toast } from "react-toastify/dist/components"

const getLikedData=async({token,userDataDispatch})=>{
    try {
        const response = await axios.get('/api/user/likes',{headers:{authorization: token }});
        if(response.status===200){
            userDataDispatch({type:'LIKED_DATA',payload:response?.data?.likes})
        }
    } catch (error) {
        toast.error('Oops!!!Something went wrong...');
    }
}

const addToLikedData=async({token, userDataDispatch,video})=>{
    try {
        const response = await axios.post('/api/user/likes',{video},{headers: { authorization: token }});
        if (response.status === 201) {
            userDataDispatch({
              type: 'LIKED_DATA',
              payload: response?.data?.likes,
            });
            toast.success('You just likes a video...')
        }
    } catch (error) {
        toast.error('Oops!!!Something went wrong...')
    }
}

const deleteFromLikedData = async(video, token, userDataDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      userDataDispatch({ type: 'LIKED_DATA', payload: response?.data?.likes });
      toast.success('You have unliked the video...');
    }
  } catch (error) {
    toast.error('Oops!!!Something went wrong...');
  }
};

export{getLikedData,addToLikedData,deleteFromLikedData}