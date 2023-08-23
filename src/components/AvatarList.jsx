import { useState } from "react";
import Search from "./Search";
import Image from "./Image";
import useDebounce from "../hooks/useDebounce";

function AvatarList() {
    const [username, setUsername] = useState("");
    const debouncedSearch = useDebounce((value) => setUsername(value))
    const handleUsernameChange = (newUsername) => {
        debouncedSearch(newUsername)
    };

    return (
        <div className="main-container">
            <Search onUsernameChange={handleUsernameChange} />
            <div className="avatar-list">
                <Image username={username} />
            </div>
        </div>
    );
}

export default AvatarList;
