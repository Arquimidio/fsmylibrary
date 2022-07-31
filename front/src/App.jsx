import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import AllBooks from './components/AllBooks'
import Protected from './components/Protected'
import MyBooks from './components/MyBooks'
import Footer from './components/Footer'
import bookServices from './services/bookServices'
import { loginContext } from './context/loginContext'
import './App.css'


function App() {
  const { 
    user,
    retrieveUser,
    updateBooks,
  } = useContext(loginContext)

  useEffect(() => {
    retrieveUser()
  }, [])

  const addNewBook = async (selectedBook) => {
    const newBook = await bookServices
      .addBook(user.token, selectedBook)
    
    updateBooks(newBook)
  }

  return (
    <>
    <div className='content-container'>
      <Nav />
      <Routes>
        <Route 
          exact
          path='/'
          element={ <HomePage /> }
        />
        <Route 
          path="/login" 
          element={ <LoginForm /> } 
        />
        <Route 
          path="/signup" 
          element={ <SignupForm /> } 
        />
        <Route 
          path='/mybooks'
          element={
            <Protected>
              <MyBooks />
            </Protected>
          } 
        />
        <Route 
          path='/allBooks'
          element={
            <AllBooks
              addNewBook={ addNewBook }
            />
          } 
        />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
