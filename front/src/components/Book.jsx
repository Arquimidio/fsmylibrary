import { useContext } from "react"
import { loginContext } from "../context/loginContext"
import ProgressBar from "./ProgressBar"


export default function Book({ bookInfo }){
    const DEFAULT_COVER = 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
    const { user, handleDeletion } = useContext(loginContext)
    const styles = {
        backgroundImage: `url(${ bookInfo?.cover ||  DEFAULT_COVER})`
    }

    const getProgress = () => {
        return Math.floor(bookInfo.pagesRead/bookInfo.numberOfPages * 100) / 100
    }

    return(
        <div className="book-info-wrapper">
            <button 
                onClick={handleDeletion(user.token, bookInfo._id)}
                className="delete"
            >X</button>
            <div style={styles} className="book"></div>
            <ProgressBar completed={getProgress()}/>
            <p>
                <span className="book-text-info title-span">{ bookInfo.title }</span>
                <span className="book-text-info">{ bookInfo.author || 'Unknown'}</span>
                <span className="book-text-info">Pages: { bookInfo.numberOfPages || 'Unknown' }</span>
            </p> 
        </div>
    )
}