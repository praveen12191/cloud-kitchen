import { createContext, useContext, useEffect, useState } from "react"
import "./css/item.css"
import axios from "axios"
import { Context } from "./navbar"
const Item = ({name,img,price,total,settotal}) => {
    eventP
    const [val,setval] = useState(0)
    const {items,setcart,cartCount} = useContext(Context)
    const fun1=()=>{
        val==0 ? setval(0) : setval(val-1)
        if(val==0){
            setval(0)
        }
        else{
            setval(val-1)
            settotal(total-price)
        }
    }
    const fun2=()=>{
        setval(val+1)
        settotal(total+price)
    }
    const addToCart = () => {
      
        // Check if the item already exists in the cart
        setcart(cartCount+val)
            let flag = 0 
           for(let item of items){
               if(item.name==name)
               {
                flag = 1
                item.count=val}
           }
           if(flag==0)
                items.push({"name":name,"price":price,"count":val})
      };
      console.log(total)
        return (

                <div class="top">
                    <div class="cart1">
                        <img src={img}></img>
                    <div class="quantity">
                        <span>{name}</span>
                        <p>rs:{price}</p>
                        <button onClick={fun1} class="quantity-btn">-</button>
                        <span >{val}</span>
                        <button onClick={fun2} class="quantity-btn">+</button>
                    </div>
                    <div className="buy">
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
                </div>

       );
}
export default Item;