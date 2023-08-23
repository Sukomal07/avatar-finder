import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(username) {
    const [avatar, setAvatar] = useState('');
    const apiUrl = `https://api.github.com/users/${username}`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(apiUrl);
                const image = response.data.avatar_url;
                setAvatar(image);
            } catch (error) {
                console.error('Error fetching GitHub data: ', error);
                setAvatar('');
            }
        }

        if (username) {
            fetchData();
        } else {
            setAvatar('');
        }
    }, [username, apiUrl]);

    return avatar;
}

export default useFetch;
