import { useContext } from "react"
import { loginContext } from "../context/loginContext"
import Book from "./Book"

export default function MyBooks(){
    const { user } = useContext(loginContext)

    return(
        <div className="container">
            <div className="books-container">
                {
                    user.books.map(book => (
                        <Book bookInfo={ book } />
                    ))
                }
            </div>
        </div>
    )
}