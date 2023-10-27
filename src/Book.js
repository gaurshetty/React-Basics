import React from 'react'
import './Book.css'

const Book = (props) =>{
  const {image, title, author, price} = props;
  return (
    <div className='book'>
      <div className='book-img'>
        <img src={image} alt='' />
      </div>
      <div className="book-info">
        <h2 className='book-title'>{title}</h2>
        <p className='book-author'>by {author}</p>
        <p className='book-price'>Rs.{price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  )
}

export default Book
