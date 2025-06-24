import React, { useContext } from "react";
import Post from "./Post";
import UserInfoContext from "../context/userInfoContext";

export default function BlobPage() {
    const userInfo = useContext(UserInfoContext);
    return (
        <div>
            <h1>BLOB BlobPage</h1>
            <Post username={userInfo.username} isAdmin={userInfo.isAdmin} />
        </div>
    );
}
