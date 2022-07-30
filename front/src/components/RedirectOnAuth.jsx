import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { loginContext } from '../context/loginContext'

export default function RedirectOnAuth(props){
    const { user } = useContext(loginContext)
    return(
        user
        ?
        <Navigate to={`${props.path}`} />
        :
        props.children
    )
}