import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {
                    /* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <use xlink:href="#bootstrap" />
                        </svg>
                    </a> */
                    }

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/posts" className="nav-link px-2 link-secondary">Posts</Link></li>
                        <li><Link to="/add-post" className="nav-link px-2 link-secondary"> Add Post</Link></li>
                        <li><Link to="/selected-posts" className="nav-link px-2 link-secondary"> Selected Posts</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;