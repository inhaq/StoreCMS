import React from 'react';
import CATEGORIES from '../constants/bookCategories'
import useBooksForm from '../hooks/useBooksForm'

export default function BooksForm () {
    const {handleChange,handleSubmit,state} = useBooksForm()
    return (
      <form className="formBook">
        <h1 className="addBook">ADD NEW BOOK</h1>
        <input onChange={e => handleChange('title',e.target.value)} value={state.title} />
        <select defaultValue={'DEFAULT'} onChange={e =>handleChange('category',e.target.value)}>
        <option value="DEFAULT" disabled>Select</option>
          {CATEGORIES.map((category) => (<option key={category}>{category}</option>))}
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
}

