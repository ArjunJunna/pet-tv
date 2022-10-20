import { useContext, createContext, useReducer, useEffect } from 'react';
import { dataReducer } from '../reducers/dataReducer';
import { getAllVideos } from '../utilities/js/dataHandlers/videoDataHandler';
import { getAllCategories } from '../utilities/js/dataHandlers/categoryDataHandler';

const dataContext=createContext();

const DataContextProvider=({children})=>{

    const [data, dataDispatch] = useReducer(dataReducer, {
      videoData: [],
      categoryData: [],
      selectedCategory: '',
      isLoading: true,
      searchFor: '',
    });

    useEffect(()=>{
        getAllCategories(dataDispatch)
        getAllVideos(dataDispatch)
    },[]);

    return(
        <dataContext.Provider value={{data,dataDispatch}}>{children}</dataContext.Provider>
    )
}

const useDataContext=()=>useContext(dataContext)

export {useDataContext,DataContextProvider}