import axios from "axios";

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
});

const getPosts = () => {
    return api.get(`/posts`);
};

export { getPosts };
