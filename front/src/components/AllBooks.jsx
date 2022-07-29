import axios from "axios"
import { useState } from "react"
import GoogleBook from "./GoogleBook"
import BookForm from "./BookForm"

const API_URL = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDDA3ljWm7b3v95Pw4ngO_xMt38aosrlv4'

export default function AllBooks({ addNewBook }){
    const [books, setBooks] = useState([])
    const [query, setQuery] = useState('')
    const [selectedBook, setSelectedBook] = useState(null)


    const formatBook = (book) => {
        const { volumeInfo } = book;
        const { title, pageCount: numberOfPages, authors, imageLinks } = volumeInfo
        const { thumbnail: cover } = imageLinks || {}
        return { title, author: authors?.[0], numberOfPages, cover }
    }

    const selectBook = (book) => {
        return () => {
            setSelectedBook(book)  
        }
    }

    const changeBooks = async (url) => {
        const { data: { items } } = await axios.get(url)
        const information = items.map(formatBook)
        setBooks(information)
    }
    
    const changeQuery = (event) => {
        const { value } = event.target
        setQuery(value)
    }
    
    const searchBooks = (event) => {
        event.preventDefault()
        const url = new URL(API_URL)
        url.searchParams.set('q', query)
        changeBooks(url)
    }

    return (
        <div>
            {
                selectedBook 
                &&
                <BookForm 
                    addNewBook={addNewBook}
                    bookInfo={selectedBook}
                />
            }
            <div className="container">
                <form onSubmit={ searchBooks }>
                    <input
                        value={ query }
                        onChange={ changeQuery }
                        placeholder="Title..."
                    />
                    <button>Search</button>
                </form>
            </div>
            <div className="books-container">
                {
                    books.map(book => (
                        <GoogleBook 
                            bookInfo={ book }
                            selectBook={selectBook}
                        />
                    ))
                }
            </div>
        </div>
    )
}