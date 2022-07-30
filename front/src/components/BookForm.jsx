import useForm from "../hooks/useForm"
import Protected from "./Protected"

export default function BookForm({ 
  bookInfo,
  addNewBook
}){

  const BOOK_DEFAULT = {
    wasRead: false,
    pagesRead: 0,
    notes: ''
}

  const [bookProgress, setBookProgress] = useForm(BOOK_DEFAULT)

  const sendNewBook = (event) => {
    event.preventDefault()
    addNewBook({ ...bookInfo, ...bookProgress })
  }

  const pagesVal = bookProgress.wasRead
    ? bookInfo?.numberOfPages || 0
    : bookProgress.pagesRead

  const maxPages = bookInfo?.numberOfPages || 4000


  return (
    <Protected>
      <div className="book-form-wrapper">
        <form onSubmit={sendNewBook}>
          <label htmlFor='wasRead'>Book was read</label>
          <input
            id="wasRead"
            name='wasRead' 
            type='checkbox'
            checked={bookProgress.wasRead}
            onChange={setBookProgress}
          />
          <input 
            type='range'
            name='pagesRead'
            min='0'
            max={maxPages}
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
      </div>
    </Protected>
  )
}