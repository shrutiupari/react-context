import React from "react";

export default function Comment({ username, isAdmin }) {
    // const { username, isAdmin } = useContext(UserInfoContext);
    return (
        <>
            <h2> Example Component Title </h2>
            <p>Logged in as... {username}</p>
            {isAdmin && <button>Testing</button>}
        </>
    );
}
