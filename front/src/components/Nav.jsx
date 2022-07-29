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
          <h3>Hello, { user.name }!</h3>
          <Link to='/mybooks'>My books</Link>
          <button onClick={ logout }>Log out</button>
        </div>
      : 
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
    }
    </nav>
  )
}