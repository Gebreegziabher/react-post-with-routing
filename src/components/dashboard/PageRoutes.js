import { Navigate, Route, Routes } from "react-router-dom";
import AllPosts from "../posts/all-posts/All-Posts";
import NewPost from "../posts/new-post/NewPost";
import PostDetail from "../posts/post-detail/post-detail";

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="posts" element={<AllPosts />}/>
            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="add-post" element={<NewPost />} />
        </Routes>
    );
}