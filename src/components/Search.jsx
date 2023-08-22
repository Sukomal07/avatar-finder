import { useState } from "react"

function Search() {
    const [userName, setUsername] = useState('')
    console.log(userName);
    return (
        <div className="search-container">
            <input type="text" className="searchBox" placeholder="Enter username..." value={userName} onChange={(e) => setUsername(e.target.value)} />
        </div>
    )
}

export default Search