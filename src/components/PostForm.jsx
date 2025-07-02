import React, { useEffect, useState } from "react";
import { createPost, updatePost } from "../services/postService";

export default function PostForm({ posts, setPosts, editPost, setEditPost }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (editPost) {
            updatingPost();
        } else {
            addPost();
        }

        setTitle("");
        setBody("");
        setEditPost(null);
    };

    const addPost = () => {
        createPost({ title, body })
            .then((res) => {
                setPosts([...posts, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (editPost) {
            setTitle(editPost.title);
            setBody(editPost.body);
        } else {
            setTitle("");
            setBody("");
        }
    }, [editPost]);

    const updatingPost = () => {
        updatePost(editPost.id, { title, body })
            .then((res) => {
                setPosts(
                    posts.map((post) =>
                        post.id === editPost.id ? res.data : post
                    )
                );
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>Title</div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div>Body</div>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div>
                    <button type="submit">
                        {editPost ? "Edit Post" : "Add Post"}
                    </button>
                </div>
            </form>
        </>
    );
}
