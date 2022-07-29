import { useContext } from "react"
import { loginContext } from "../context/loginContext"
import { Link } from "react-router-dom"

export default function Protected({ children }){
    const { user } = useContext(loginContext)
    return (
        user
        ? 
        children
        : 
        <div>
            <h2>Please, log in to see this page!</h2>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}