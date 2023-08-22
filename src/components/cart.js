import { useContext, useState } from "react"
import "./css/cart.css"
import axios from "axios"
import { Context } from "./navbar"
import Item from "./item"
import {Grid,Paper,TextField, Button} from '@mui/material';

const Cart = ({name,price,count,id,total,setTotal}) => {
    const value = sessionStorage.getItem('id')
    const fun1=()=>
    {
        if(val==0)
        {
            setval(0)
            if(quality[value]==undefined){quality[value] = {}}
            quality[value][id] = 0 
            setquality({...quality})
        }
        else 
        {
            setval(val-1)
            setTotal(total-price)
            if(quality[value]==undefined){quality[value] = {}}
            quality[value][id] = val-1
            setquality({...quality})
        }
        
    }
    const fun2=()=>
    {
        setval(val+1)
        if(quality[value]==undefined){quality[value] = {}}
        quality[value][id] = val+1
        setquality({...quality})
        setTotal(total+price)
    }
    const [val,setval] = useState(count)
    const {quality,setquality,setflag} = useContext(Context)
    setflag(true)

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