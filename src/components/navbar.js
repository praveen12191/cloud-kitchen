import { Link, Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./css/navbar.css"
import { createContext, useEffect, useState } from "react"
import axios from "axios";
export const Context = createContext()
const Navbar=() =>{

    const[display,setDisplay] = useState("block")
    const [items,setitems] = useState([])
    const [count,setcount] = useState(0)
    const [cartCount,setcart] = useState(0)
    const [increment,setincrement] = useState({'id':''})
    const [quality,setquality] = useState({})
    const [flagCount,setflag] = useState(false)
    const url = "http://127.0.0.1:8000/getDetails/"
    useEffect(() => {
         let total = 0
        axios
        .get(url)
          .then(({ data }) => {
            data.map((i)=>
            {
                if(increment[i.id])
                {
                    total+=increment[i.id]
                }})
                console.log(total);
                setcart(total)
          })
      }, [cartCount]);
    return (
        <Context.Provider value={{items,count,setcount,cartCount,setcart,increment,setincrement,quality,setquality,flagCount,setflag,display,setDisplay}}>

        <div>
            <div className="bar" style={{display:display}}>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <sup>{cartCount}</sup>
                </Link>
                <Link to="/history">History</Link>
            </div>

    <Outlet></Outlet>
    </div>
        </Context.Provider>
    )
}
export default Navbar
