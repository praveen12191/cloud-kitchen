import { useContext, useState } from "react"
import "./css/cart.css"
import axios from "axios"
import { Context } from "./navbar"
const Cart = ({name,price,count,total,setTotal}) => {
 
    
    const fun1=()=>
    {
        if(val==0)
        {
            setval(0)
        }
        else
        {
            setval(val-1)
            setTotal(total-price)
        }
        
    }
    const fun2=()=>
    {
        setval(val+1)
        setTotal(total+price)
    }
    const [val,setval] = useState(count)
    return ( 
        <div>
                <div className="cart">
                    <div className="content">
                        <p>{name}</p>
                        <p>$:{price}</p>
                    </div>
                    <div className="cartbutton">
                        <button onClick={fun1} class="btn">-</button>
                        <span>{val}</span>
                        <button onClick={fun2} class="btn">+</button>
                    </div>
                    <div className="price">
                        <p>{price*val}</p>
                    </div>
                </div>
                    </div>
     );
}
 
export default Cart;