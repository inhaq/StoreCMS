import React          from 'react';
import Book           from '../components/Book';
import CategoryFilter from "../components/CategoryFilter";
import useBookList from '../hooks/useBookList'
export default function BooksList() {
  const {books,handleFilterChange,handleRemoveBook,filter} = useBookList()

  let showBooks = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div className="bookList">
      <CategoryFilter onFilterChange={(e) => handleFilterChange(e.target.value)} />
        {showBooks.map((book) => {
          return <Book key={book.id} book={book} onRemove={()=>handleRemoveBook(book)} />
        })}
    </div>
  );
};


