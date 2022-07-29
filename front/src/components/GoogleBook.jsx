export default function GoogleBook({ bookInfo }){
    const DEFAULT_COVER = 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
    
    const styles = {
        backgroundImage: `url(${ bookInfo.cover ||  DEFAULT_COVER})`
    }
    return(
        <div className="book-info-wrapper">
            <div style={styles} className="book"></div>
            <p>
                <span className="book-text-info title-span">{ bookInfo.title }</span>
                <span className="book-text-info">{ bookInfo.author || 'Unknown'}</span>
                <span className="book-text-info">Pages: { bookInfo.numberOfPages || 'Unknown' }</span>
            </p>  
        </div>
    )
}