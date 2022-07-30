import RedirectOnAuth from "./RedirectOnAuth"
import { Link } from "react-router-dom"
import Field from "./Field"

export default function LoginForm({ 
  handler, 
  formState, 
  submit
}){
  return(
    <RedirectOnAuth path='/myBooks'>
      <div className="login-wrapper">
        <div className="container">
          <form className="auth-form" onSubmit={ submit }>
            <Field
              name="email"
              handler={ handler }
              value={ formState.email }
              placeholder="someone@example.com"
            />
            <Field 
              name="password"
              handler={ handler }
              value={ formState.password }
              placeholder="••••••••"
              type="password"
            />
            <button className="btn btn-main">Log in</button>
            <p>Are you new around here? <Link to='/signup'>Sign up</Link></p>
          </form>
        </div>
      </div>
    </RedirectOnAuth>
  )
}