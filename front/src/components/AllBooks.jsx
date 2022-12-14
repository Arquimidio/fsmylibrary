import axios from "axios"
import { useState } from "react"
import Search from "./Search"
import GoogleBook from "./GoogleBook"
import BookForm from "./BookForm"

const API_URL = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDDA3ljWm7b3v95Pw4ngO_xMt38aosrlv4&maxResults=12&printType=books'

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

    const clearSelectedBook = () => {
        setSelectedBook(null)
    }

    const changeBooks = async (url) => {
        const { data: { items } } = await axios.get(url)
        const information = items?.map(formatBook) || []
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
                    clearSelectedBook={clearSelectedBook}
                />
            }
            <Search 
                searchBooks={searchBooks}
                query={query}
                changeQuery={changeQuery}
            />
            <div className="books-container container">
                {
                    books.length
                    ?
                    books.map(book => (
                        <GoogleBook 
                            bookInfo={ book }
                            selectBook={selectBook}
                        />
                    ))
                    :
                    <h3>No books found for this search</h3>
                }
            </div>
        </div>
    )
}