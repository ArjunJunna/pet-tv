import { createContext, useContext, useReducer } from 'react';
import { userDataReducer } from '../reducers/userDataReducer';

const userDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [userData, userDataDispatch] = useReducer(userDataReducer, {
    historyData: [],likedData:[],watchlaterData:[],playlistData:[]
  });
  return (
    <userDataContext.Provider value={{ userData, userDataDispatch }}>
      {children}
    </userDataContext.Provider>
  );
};

const useUserData = () => useContext(userDataContext);

export { useUserData, UserDataContextProvider };
