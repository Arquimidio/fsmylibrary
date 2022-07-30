import { useContext } from "react"
import { Link } from "react-router-dom"
import { loginContext } from '../context/loginContext'

export default function Nav(){
  const { user, logout } = useContext(loginContext)
  return(
    <nav className="container">
      <Link to='/allBooks'><h1>My library</h1></Link>
    {
      user
      ? 
        <div>
          <span>Hello, { user.name }!</span>
          <Link 
            to='/mybooks'
            className="btn btn-hollow"
          >My books</Link>
          <a className="btn btn-fill" onClick={ logout }>Log out</a>
        </div>
      : 
        <div>
          <Link 
            className="btn btn-hollow"
            to='/login'
          >Login</Link>
          <Link 
            className="btn btn-fill"
            to='/signup'
          >Sign up</Link>
        </div>
    }
    </nav>
  )
}