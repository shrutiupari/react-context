import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
    // const { isAdmin } = useContext(UserInfoContext);

    return (
        <>
            {isAdmin && <button>Delete</button>}
            <h2> Example Post Title </h2>
            <p>This is an example post content</p>
            <Comment username={username} isAdmin={isAdmin} />
        </>
    );
}
