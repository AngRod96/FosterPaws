import "./NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    
    return <ul className="navbar">
        <li className="navbar-item">
            <Link className="link" to="/" >Home</Link>
        </li>
        <li className="navbar-item">
            <Link className="link" to="/profile" >Profile</Link>
        </li>
        <li className="navbar-item">
            <Link className="link" to="/adopt" >Adopt</Link>
        </li>
        <li className="navbar-item">
            <Link className="link" to="/newPost">New Post</Link>
        </li>
       
        {localStorage.getItem("fosterpaws_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("fosterpaws_user")
                        navigate("/", { replace: true })
                    }}
                >
                    Logout
                </Link>
            </li>
        ) : (
            ""
        )}
    </ul>
}