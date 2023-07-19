import { Link, Outlet } from "react-router-dom"
import "./css/navbar.css"

const Navbar=() =>{
    return (
        <div>
            <div className="bar">
                <Link to="/login">Login</Link>
                <Link to ="/register">Register</Link>
            </div>
        <Outlet></Outlet>
    </div>
    )
}
export default Navbar
