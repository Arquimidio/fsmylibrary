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

const deleteBook = async (token, id) => {
  const headers = {
    'Authorization': `bearer ${token}`
  }
  console.log(id)

  try{
    return await axios
      .delete(`${MAIN_PATH}/${id}`, { headers })
  }catch(error){
    console.log(error)
  }
}

export default {
  addBook,
  deleteBook
}