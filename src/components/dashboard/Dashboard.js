import AllPosts from "../posts/all-posts/All-Posts";
import PostDetail from "../posts/post-detail/post-detail";
import "../css/style.css"
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewPost from "../posts/new-post/NewPost";
import { PostServiceBaseURL } from "../posts/service/posts-service";
import { SeletedPostContext } from "../posts/context/SelectedPostContext";

function Dashboard() {
    const [postsState, setPostsState] = useState([]);
    const [selectedState, setSelectedState] = useState(0);
    const [fetchCountState, setFetchCountState] = useState(1);

    const fetchData = () => {
        axios.get(PostServiceBaseURL)
            .then(response => {
                setPostsState(response.data);
            }).catch(error => {
            });
    }

    useEffect(() => fetchData(), [fetchCountState]);

    const setSelected = (id) => {
        setSelectedState(id);
    }

    const onNewPostAdded = (newState) => {
        setFetchCountState(newState);
    }

    const onPostDeleted = (newState) => {
        setFetchCountState(newState);
        setSelectedState(0);
    }

    const onPostEdited = (newState) => {
        setFetchCountState(newState);
    }

    return (
        <React.Fragment>
            <SeletedPostContext.Provider value={selectedState}>
                <div className="container">
                    <p>Total: {fetchCountState} fetches</p>
                    <AllPosts
                        posts={postsState}
                        setSelected={setSelected} />
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <div className="component">
                                <h4>New Post</h4>
                                <NewPost onNewPostAdded={onNewPostAdded} />
                            </div>
                        </div>
                        {
                            selectedState !== 0 &&
                            <div className="col-6">
                                <div className="component">
                                    <h4>Selected Post</h4>
                                    <PostDetail
                                        onPostDeleted={onPostDeleted}
                                        onPostEdited={onPostEdited} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </SeletedPostContext.Provider>
        </React.Fragment>
    );
}

export default Dashboard;