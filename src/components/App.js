import React          from 'react';
import BooksList      from "../containers/BooksList";
import BooksForm      from "../containers/BooksForm";
import Navbar         from "../components/Navbar"
import                     '../styles/style.css';
export default function App() {
  return (
    <div>
      <Navbar />
      <BooksList />
      <BooksForm />
    </div>
  );
}
