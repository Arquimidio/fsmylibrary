import RedirectOnAuth from "./RedirectOnAuth"
import Field from "./Field"

export default function SignupForm({
  handler,
  formState,
  submit
}){
  
  return(
    <RedirectOnAuth path='/allBooks'>
      <div className="container">
        <form onSubmit={ submit } className="auth-form">
          <Field 
            name="name"
            value={ formState.name }
            handler={ handler }
            placeholder="e.g. John Doe"
          />
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
        </form>
      </div>
    </RedirectOnAuth>
  )
}