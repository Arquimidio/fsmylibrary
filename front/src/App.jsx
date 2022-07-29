import { useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import useForm from './hooks/useForm'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import AllBooks from './components/AllBooks'
import Protected from './components/Protected'
import MyBooks from './components/MyBooks'
import authServices from './services/authServices'
import bookServices from './services/bookServices'
import { loginContext } from './context/loginContext'
import './App.css'

const DEFAULT_LOGIN = {
  email: '',
  password: ''
}
const DEFAULT_SIGNUP = {
  ...DEFAULT_LOGIN, 
  name: ''
}

function App() {
  const { 
    user, 
    logUser, 
    logout,
    updateBooks 
  } = useContext(loginContext)

  const [signup, setSignup] = useForm(DEFAULT_SIGNUP)
  const [login, setLogin] = useForm(DEFAULT_LOGIN)

  const signupUser = async (event) => {
    event.preventDefault()
    try{
      const userData = await authServices.signup(signup)
      logUser(userData)
    }catch(error){
      console.log(error)
    }
  }

  const loginUser = async (event) => {
    event.preventDefault()
    try{
      const userData = await authServices.login(login)
      logUser(userData)
    }catch(error){
      console.log(error)
    }
  }
  
  const addNewBook = async (selectedBook) => {
    const newBook = await bookServices
      .addBook(user.token, selectedBook)
    
    updateBooks(newBook)
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route 
          path="/login" 
          element={
            <LoginForm 
              handler={ setLogin }
              formState={ login }
              submit={ loginUser }
            />
          } 
        />
        <Route 
          path="/signup" 
          element={
            <SignupForm 
              handler={ setSignup }
              formState={ signup }
              submit={ signupUser }
            />
          } 
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
  )
}

export default App
