import {CREATE_BOOK,REMOVE_BOOK,CHANGE_FILTER} from '../constants/actionConstants'

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    payload: 
      book
  };
};



export const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    payload:
      book
  };
};


export const changeFilter = (category) => {
  return {
    type: CHANGE_FILTER,
    payload: category
  };
};