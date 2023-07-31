import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./css/navbar.css"
import { createContext, useState } from "react"
export const Context = createContext()
const Navbar=() =>{
    const [items,setitems] = useState([])
    const [count,setcount] = useState(0)
    const [cartCount,setcart] = useState(0)

    return (
        <Context.Provider value={{items,count,setcount,cartCount,setcart}}>

        <div>
            <div className="bar">
                <Link to="/login">Login</Link>
                <Link to ="/register">Register</Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <sup>{cartCount}</sup>
                </Link>


            </div>
        <Outlet></Outlet>
    </div>
        </Context.Provider>
    )
}
export default Navbar
