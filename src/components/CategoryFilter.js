import React from 'react';
import CATEGORIES from "../constants/bookCategories";

export default function CategoryFilter({ onFilterChange }) {
  const options = ['All', ...CATEGORIES].map((category) => (<option key={category}>{category}</option>));
  return (
    <form className="categoryForm">
      <select onChange={onFilterChange}>
        {options}
      </select>
    </form>
  );
};
