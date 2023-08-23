import useFetch from "../hooks/useFetch";

function Image({ username }) {
    const avatarUrl = useFetch(username);

    return (
        <div>
            {avatarUrl && (
                <img src={avatarUrl} alt={`${username}'s avatar`} className="image" />
            )}
        </div>
    );
}

export default Image;
