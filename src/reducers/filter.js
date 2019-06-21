import {CHANGE_FILTER} from "../constants/actionConstants";

export const filterReducer = (state = 'All', action) => {
  if (action.type === CHANGE_FILTER){
    return action.payload;
  } else {
    return state;
  }
};