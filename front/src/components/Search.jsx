export default function Search({
    searchBooks,
    query,
    changeQuery
}){
    return (
        <div className="search-bar">
            <form onSubmit={ searchBooks } className="container search-form">
                <input
                    value={ query }
                    onChange={ changeQuery }
                    placeholder="Title..."
                />
                <button className="btn btn-main">Search</button>
            </form>
        </div>
    )
}