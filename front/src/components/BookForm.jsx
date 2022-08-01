import { useEffect } from "react"
import useForm from "../hooks/useForm"
import Protected from "./Protected"

export default function BookForm({ 
  bookInfo,
  addNewBook,
  clearSelectedBook
}){

  const BOOK_DEFAULT = {
    wasRead: false,
    numberOfPages: bookInfo.numberOfPages,
    pagesRead: 0,
    notes: ''
}

  const [bookProgress, setBookProgress] = useForm(BOOK_DEFAULT)

  useEffect(() => {
    if(bookProgress.wasRead){
      setBookProgress('pagesRead', bookProgress.numberOfPages)
    }
  }, [bookProgress.wasRead])


  const sendNewBook = (event) => {
    event.preventDefault()
    addNewBook({ ...bookInfo, ...bookProgress })
    clearSelectedBook()
  }

  const pagesVal = bookProgress.wasRead
    ? bookInfo?.numberOfPages || 0
    : bookProgress.pagesRead

  return (
    <Protected>
      <div className="book-form-wrapper">
        <div className="book-form-container">
          <form onSubmit={sendNewBook} className="book-form">
            <label htmlFor='wasRead'>Book was read</label>
            <input
              id="wasRead"
              name='wasRead' 
              type='checkbox'
              checked={bookProgress.wasRead}
              onChange={setBookProgress}
            />
            <input 
              type='number'
              name='numberOfPages'
              value={bookProgress.numberOfPages}
              onChange={setBookProgress}
            />
            <input 
              type='number'
              name='pagesRead'
              value={pagesVal}
              onChange={setBookProgress}
              disabled={bookProgress.wasRead}
            />
            <textarea 
              name="notes"
              placeholder="Type your notes about this book here..."
              value={bookProgress.notes}
              onChange={setBookProgress}
            />
            <button>Save reading</button>
          </form>
          <button 
            className="btn btn-fill"
            onClick={clearSelectedBook}
          >Cancel</button>
        </div>
      </div>
    </Protected>
  )
}