import { useState } from "react";

function Search({ onUsernameChange }) {
    const [userName, setUsername] = useState("");

    const handleInputChange = (e) => {
        const inputUsername = e.target.value;
        setUsername(inputUsername);
        onUsernameChange(inputUsername);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="searchBox"
                placeholder="Enter username..."
                value={userName}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default Search;
