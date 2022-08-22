const initialState = {
  isLoading: true,
  info: [],
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
        info: action.payload,
      };
    default:
      return state;
  }
};

export default covidReducer;
