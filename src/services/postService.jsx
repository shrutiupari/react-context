import axios from "axios";

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
});

const getPosts = () => {
    return api.get(`/posts`);
};

const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
};

const createPost = (post) => {
    return api.post(`/posts`, post);
};

const updatePost = (id, post) => {
    return api.put(`/posts/${id}`, post);
};

export { getPosts, deletePost, createPost, updatePost };
