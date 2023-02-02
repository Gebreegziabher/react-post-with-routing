import { buildQueries } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../post/post";
import { PostServiceBaseURL } from "../service/posts-service";

const linkStyle = {
    textDecoration: "none",
    color: "black"
};

const AllPosts = (props) => {

    const [postsState, setPostsState] = useState([]);
    // const [selectedState, setSelectedState] = useState(0);

    const fetchData = () => {
        axios.get(PostServiceBaseURL)
            .then(response => {
                setPostsState(response.data);
                console.log("data is fetched");
            }).catch(error => {
            });
    }

    useEffect(() => fetchData(), []);

    // const setSelected = (id) => {
    //     setSelectedState(id);
    // }

    const postsBlock = postsState.map(post => {
        return (
            <div>
                <Link to={`${post.id}`} key={post.id} style={linkStyle}>
                    <Post
                        id={post.id}
                        key={post.id}
                        title={post.title}
                        content={post.content}
                    />
                </Link>
            </div>
        )
    });

    return (
        <div className="container">
            {postsBlock}
        </div>
    );
}
export default AllPosts;