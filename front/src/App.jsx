import { useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import AllBooks from './components/AllBooks'
import Protected from './components/Protected'
import MyBooks from './components/MyBooks'
import authServices from './services/authServices'
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
  const { user, logUser, logout } = useContext(loginContext)
  const [signup, setSignup] = useState(DEFAULT_SIGNUP)
  const [login, setLogin] = useState(DEFAULT_LOGIN)

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
  
  const handleForm = (fn) => {
    return (event) => {
      const { value, name } = event.target
      fn(prevVal => ({
        ...prevVal,
        [name]: value
      }))
    }
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route 
          path="/login" 
          element={
            <LoginForm 
              handler={ handleForm(setLogin) }
              formState={ login }
              submit={ loginUser }
            />
          } 
        />
        <Route 
          path="/signup" 
          element={
            <SignupForm 
              handler={ handleForm(setSignup) }
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
            <AllBooks />
          } 
        />
      </Routes>
    </div>
  )
}

export default App
