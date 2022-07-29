import React, { useState } from "react"
const loginContext = React.createContext(null)

function LoginContextProvider(props){
    const [user, setUser] = useState(null)

    const logUser = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <loginContext.Provider value={ { user, logUser, logout } }>
            { props.children }
        </loginContext.Provider>
    )
}

export {
    loginContext,
    LoginContextProvider
}