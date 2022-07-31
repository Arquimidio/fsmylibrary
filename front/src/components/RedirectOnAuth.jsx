import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { loginContext } from '../context/loginContext'

export default function RedirectOnAuth({ children, path }){
    const { user } = useContext(loginContext)
    return(
        user
        ?
        <Navigate to={`${ path }`} />
        :
        children
    )
}