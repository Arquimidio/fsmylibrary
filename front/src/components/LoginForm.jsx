import { useContext } from "react"
import { Link } from "react-router-dom"
import RedirectOnAuth from "./RedirectOnAuth"
import Field from "./Field"
import { loginContext } from "../context/loginContext"

export default function LoginForm(){

  const {
    login,
    setLogin,
    loginUser
  } = useContext(loginContext)

  return(
    <RedirectOnAuth path='/myBooks'>
      <div className="login-wrapper">
        <div className="container">
          <form className="auth-form" onSubmit={ loginUser }>
            <Field
              name="email"
              handler={ setLogin}
              value={ login.email }
              placeholder="someone@example.com"
              icon="at"
            />
            <Field 
              name="password"
              handler={ setLogin }
              value={ login.password }
              placeholder="••••••••"
              type="password"
              icon="lock"
            />
            <button className="btn btn-main">Log in</button>
            <p>Are you new around here? <Link to='/signup'>Sign up</Link></p>
          </form>
        </div>
      </div>
    </RedirectOnAuth>
  )
}