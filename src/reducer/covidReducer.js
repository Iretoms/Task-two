const initialState = {
  isLoading: true,
  info: [],
  total:{}
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_INFO":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCHED_INFO":
      return {
        isLoading: false,
        info: action.payload.info,
        total: action.payload.total
      };
    default:
      return state;
  }
};

export default covidReducer;
