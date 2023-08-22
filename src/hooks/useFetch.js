import axios from "axios";
import { useEffect, useState } from "react";

function useFetch() {
    const [avatarState, setAvatarState] = useState({
        avatar: '',
        url: `https://api.github.com/users/`
    })

    async function fetchData() {
        const response = await axios.get(avatarState.url)
        const image = response.data.avatar_url
        setAvatarState((state) => ({ ...state, avatar: image }))
    }

    useEffect(() => {
        fetchData()
    }, [avatarState.url])
    return { avatarState, setAvatarState }
}

export default useFetch