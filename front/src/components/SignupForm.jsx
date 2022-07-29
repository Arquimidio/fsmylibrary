export default function SignupForm({
  handler,
  formState,
  submit
}){
  
  return(
    <form onSubmit={ submit } className="container">
      <input 
        name="name"
        value={ formState.name }
        onChange={ handler } 
        placeholder="Name"
      />
      <input
        name="email"
        value={ formState.email }
        onChange={ handler }  
        placeholder="Email"
      />
      <input 
        name="password"
        value={ formState.password }
        onChange={ handler } 
        type="password" 
        placeholder="Password"
      />
      <button>Log in</button>
    </form>
  )
}