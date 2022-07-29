import axios from "axios"
const MAIN_PATH = 'http://localhost:3001/api/books'

const addBook = async (token, book) => {
  const headers = {
    'Authorization': `bearer ${token}`
  }
  try{
    const newBook = await axios
    .post(MAIN_PATH, book, { headers })

    return newBook.data
  } catch(error){
    console.log(error)
  }
}

export default {
  addBook
}