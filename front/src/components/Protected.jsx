import { useContext } from "react"
import { loginContext } from "../context/loginContext"
import { Navigate } from "react-router-dom"

export default function Protected({ children }){
    const { user } = useContext(loginContext)
    return (
        user
        ? 
        children
        : 
        <Navigate to={'/login'}/>
    )
}