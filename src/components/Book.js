import React from "react";

export default function Book({book:{title,category},onRemove}) {
  return (
    <div className="singleBook">
    <div className="left">
    <span className="category">{category}</span>
      <span className="title">{title}</span>
      <button className="remove" onClick={onRemove}>Remove</button>
    </div>
    <div className="center">
      <div className="progressBar"></div>
      <div><span className="percentage">70 %</span><span className="completed">Completed</span></div>
      
      </div>
    <div className="right">
      <span className="current">Current Chapter</span>
      <span className="chapter">Chapter 4</span>
      <button className="update">Update Progress</button>
    </div>
    </div>
  );
}; 