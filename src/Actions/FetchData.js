import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL } from './../Utils/ActionTypes';

export default function FetchData() {
  return async (dispatch) => {
    dispatch({ type: FETCHING_DATA });

    try {
      const res = await axios.get(`${apiBaseURL}wallet/winning`);
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: FETCHING_DATA_FAIL, payload: err.data });
    }
  };
}
