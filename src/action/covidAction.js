import axios from "axios";


export const fetchCovidInfo = () => async (dispatch) =>{
    dispatch({
        type: "LOADING_INFO"
    })

    const covidData = await axios.get("https://covidnigeria.herokuapp.com/api");
    dispatch({
      type: "FETCHED_INFO",
      payload: {
        info: covidData.data.data.states,
        total: covidData.data.data
      },
    });
}