import React from 'react'

export default function navbar() {
  return (
    <nav>
        <span className='logo'>BookStore CMS</span>
        <span className='books'>Books</span>
        <span className='books'>Categories</span>
        <div className="avatar">
            <div className="face"></div>
        </div>
    </nav>
  )
}
