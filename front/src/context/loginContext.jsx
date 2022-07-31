import React, { useState } from "react"
import useForm from "../hooks/useForm"
import authServices from "../services/authServices"
const loginContext = React.createContext(null)

function LoginContextProvider(props){
    
    const DEFAULT_LOGIN = {
        email: '',
        password: ''
      }
      const DEFAULT_SIGNUP = {
        ...DEFAULT_LOGIN, 
        name: ''
      }

    const [user, setUser] = useState(null)
    const [signup, setSignup] = useForm(DEFAULT_SIGNUP)
    const [login, setLogin] = useForm(DEFAULT_LOGIN)

    const logout = () => {
        setUser(null)
        localStorage.removeItem('jwt')
    }

    const saveToken = ({ token }) =>{
        localStorage.setItem('jwt', token)
    }

    const signupUser = async (event) => {
        event.preventDefault()
        try{
          const userData = await authServices.signup(signup)
          saveToken(userData)
          setUser(userData)
          setSignup(null)
        }catch(error){
          console.log(error)
        }
    }

    const loginUser = async (event) => {
        event.preventDefault()
        try{
          const userData = await authServices.login(login)
          saveToken(userData)
          setUser(userData)
          setLogin(null)
        }catch(error){
          console.log(error)
        }
    }

    async function retrieveUser(){
        const token = localStorage.getItem('jwt')
        if(token){
            const user = await authServices.retrieveUser(token)
            console.log(user)
            setUser(user)
        } 
    }

    const updateBooks = (newBook) => {
        setUser(prevUser => (
            {
                ...prevUser, 
                books: prevUser.books.concat(newBook)
            }
        ))
    }

    return(
        <loginContext.Provider value={ { 
            user, 
            logout,
            updateBooks,
            loginUser,
            signupUser,
            login,
            signup,
            setLogin,
            setSignup,
            retrieveUser
        } }>
            { props.children }
        </loginContext.Provider>
    )
}

export {
    loginContext,
    LoginContextProvider
}