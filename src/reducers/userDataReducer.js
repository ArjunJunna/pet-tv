const userDataReducer = (state, action) => {
  switch (action.type) {
    case 'HISTORY_DATA':
      return { ...state, historyData: action.payload };

    case 'LIKED_DATA': 
      return{...state,likedData:action.payload};

    case 'WATCHLATER_DATA':
      return{...state, watchlaterData: action.payload};

    default:
      return { ...state };
  }
};

export { userDataReducer };
