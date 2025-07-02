import React, { useState, useEffect } from "react";
import { deletePost, getPosts, updatePost } from "../services/postService";
import { Axios } from "axios";
import PostForm from "./PostForm";

export default function PostComponent() {
    const [posts, setPosts] = useState([]);
    const [editPost, setEditPost] = useState(null);

    useEffect(() => {
        getPosts()
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        deletePost(id)
            .then((res) => {
                setPosts(posts.filter((post) => post.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleEditPost = (post) => {
        setEditPost(post);
    };

    return (
        <>
            <h1>Posts</h1>
            <PostForm
                posts={posts}
                setPosts={setPosts}
                editPost={editPost}
                setEditPost={setEditPost}
            />
            <ul>
                {posts.map((ele) => (
                    <li key={ele.id}>
                        <h2>{ele.title}</h2>
                        <p>{ele.body}</p>
                        <button onClick={() => handleEditPost(ele)}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(ele.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
