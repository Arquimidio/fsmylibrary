import { useContext } from "react"
import { Link } from "react-router-dom"
import RedirectOnAuth from "./RedirectOnAuth"
import Field from "./Field"
import { loginContext } from "../context/loginContext"


export default function SignupForm(){
  
  const {
    signup,
    setSignup,
    signupUser
  } = useContext(loginContext)
  
  return(
    <RedirectOnAuth path='/allBooks'>
      <div className="signup-wrapper">
        <div className="container">
          <form onSubmit={ signupUser } className="auth-form">
            <Field 
              name="name"
              value={ signup.name }
              handler={ setSignup }
              placeholder="e.g. John Doe"
              icon="user"
            />
            <Field
              name="email"
              handler={ setSignup }
              value={ signup.email }
              placeholder="someone@example.com"
              icon="at"
            />
            <Field 
              name="password"
              handler={ setSignup }
              value={ signup.password }
              placeholder="••••••••"
              type="password"
              icon="lock"
            />
            <button className="btn btn-main">Sign up</button>
            <p>Already have an account? <Link to='/login'>Log in</Link></p>
          </form>
        </div>
      </div>
    </RedirectOnAuth>
  )
}