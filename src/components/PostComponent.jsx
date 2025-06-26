import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
import { Axios } from "axios";

export default function PostComponent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts.map((ele) => (
                    <li key={ele.id}>
                        <h2>{ele.title}</h2>
                        <p>{ele.body}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
