import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';
const initalState = { title: '', category: '' }
export default function useBooksForm() {
  const [state, setState] = useState(initalState)
  const dispatch = useDispatch()

  const handleChange = (type, val) => {
    setState({ ...state, [type]: val })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, category } = state;
    if (title === '' || category === '') {
      alert('Cant be blank');
      return;
    }
    dispatch(createBook({ id: Math.random(), title, category }))
    setState(initalState)
  };
  return {
    handleSubmit,
    handleChange,
    state
  }
}
