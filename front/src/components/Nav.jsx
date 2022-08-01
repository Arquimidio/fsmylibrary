import { useContext } from "react"
import { Link } from "react-router-dom"
import { loginContext } from '../context/loginContext'

export default function Nav(){
  const { user, logout } = useContext(loginContext)

  const renderLoggedIn = () => {
    return (
      <div>
            <Link 
              to='/mybooks'
              className="btn btn-hollow"
            >My books</Link>
            <a className="btn btn-fill logout" onClick={ logout }>Log out</a>
      </div>
    )
  }

  const renderLoggedOut = () => {
    return (
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
    )
  }
  return(
    <header>
      <nav className="container">
        <div className="nav-left">
          <Link to='/allBooks'>
            <h1>My library</h1>
            <span>Know your readings</span>
          </Link>
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/allBooks' className="nav-link">All books</Link>
        </div>
      {
        user? renderLoggedIn() : renderLoggedOut()
      }
      </nav>
    </header>
  )
}