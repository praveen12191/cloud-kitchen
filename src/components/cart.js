import { useContext } from "react"
import { context } from "../App"
import "./css/cart.css"

const Cart = () => {
    const fun1=()=>
    {
        val==0 ? setval(0) : setval(val-1)
    }
    const fun2=()=>
    {
        setval(val+1)
    }
    const {val,setval} = useContext(context)
    return ( 
        <div>
            <div className="cart">
                <div className="content">
                    <p>Name of the dish</p>
                    <p>$200</p>
                </div>
                <div className="cartbutton">
                    <button onClick={fun1}class="btn">-</button>
                    <span >{val}</span>
                    <button onClick={fun2} class="btn">+</button>
                </div>
                <div className="price">
                    <p>{val*100}</p>
                </div>
            </div>
            <div className="order">
                    <p>Place a order</p>
                </div>
        </div>
     );
}
 
export default Cart;