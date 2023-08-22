import Image from "./Image";
import Search from "./Search";

function AvatarList() {
    return (
        <div className="main-container">
            <Search />
            <div className="avatar-list">
                <Image />
            </div>
        </div>
    );
}

export default AvatarList;
