export default function AuthForm({ 
  handler, 
  formState, 
  submit
}){
  return(
    <form onSubmit={ submit } className="container">
      <input 
        name="email"
        onChange={ handler }
        value={ formState.email }
        placeholder="Email"
      />
      <input 
        name="password"
        onChange={ handler }
        value={ formState.password }
        type="password" 
        placeholder="Password"
      />
      <button>Log in</button>
    </form>
  )
}