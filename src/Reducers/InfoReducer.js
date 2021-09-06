import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
} from "../Utils/ActionTypes";

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function (state = initialState, { payload, type }) {
  switch (type) {
    case FETCHING_DATA:
      return state;
    case FETCHING_DATA_SUCCESS:
      return { ...state, data: payload };
    case FETCHING_DATA_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
}
