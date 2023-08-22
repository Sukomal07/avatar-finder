import useFetch from "../hooks/useFetch"

function Image() {
    const { avatarState } = useFetch();
    return (
        <div>
            <img src={avatarState.avatar} alt="photo" className="image" />
        </div>
    )
}

export default Image
