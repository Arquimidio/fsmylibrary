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

    const updateBooks = (newBook) => {
        console.log(newBook)
        setUser(prevUser => (
            {
                ...prevUser, 
                books: prevUser.books.concat(newBook)
            }
        ))
    }

    return(
        <loginContext.Provider value={ { 
            user, 
            logUser, 
            logout,
            updateBooks
        } }>
            { props.children }
        </loginContext.Provider>
    )
}

export {
    loginContext,
    LoginContextProvider
}