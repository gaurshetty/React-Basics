import React from 'react'
import Book from './Book'
import books from './books.json'

function BookList() {  
  return (
    <div>
      {books.map((ele) => {
        return (
            <Book 
            image={ele.image}
            title={ele.title}
            author={ele.author}
            price={ele.price}
            />
        )
      })}
    </div>
  )
}

export default BookList
