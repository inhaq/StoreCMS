import {useSelector,useDispatch} from 'react-redux'
import { removeBook, changeFilter } from '../actions/index';
export default function useBookList(){
  const {books, filter} = useSelector(data=>data);
  const dispatch = useDispatch()
  const handleRemoveBook = (book) =>{
    dispatch(removeBook(book))
  };

  const handleFilterChange = (filter) => {
    dispatch(changeFilter(filter))
  };
  return{
  	books,
  	filter,
  	handleFilterChange,
  	handleRemoveBook
  }
}