import { combineReducers } from 'redux';
import infoReducer from './InfoReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    info: infoReducer,
    ...asyncReducers
  });
};

export default makeRootReducer;
