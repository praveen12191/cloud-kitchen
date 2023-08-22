import { createContext, useContext, useEffect, useRef, useState } from "react"
import "./css/item.css"
import axios from "axios"
import { Context } from "./navbar"
const Item = ({name,img,price,total,settotal,id}) => {
    
    const {items,setcart,cartCount,increment,setincrement,flagCount,setflag,setDisplay} = useContext(Context)
    const [val,setval] = useState((increment[id]!=undefined)?increment[id]:0)
    const {quality,setquality} = useContext(Context)
    const value = sessionStorage.getItem('id')
    setDisplay("Block")

    const fun1=()=>{
        if(val==0){
            setval(0)
            if(quality[value]==undefined){quality[value] = {}}
            quality[value][id] = 0 
            setquality({...quality})
        }
        else{
            setval(val-1)
            settotal(total-price)
            if(quality[value]==undefined){quality[value] = {}}
            quality[value][id] = val-1
            setquality({...quality})
        }
    }
    const fun2=()=>{
        setval(val+1)
    if(quality[value]==undefined){quality[value] = {}}
        quality[value][id] = val+1
        setquality({...quality})
        settotal(total+price)
    }
    const addToCart = () => {
      
        // Check if the item already exists in the cart
        increment[id] = val
        setincrement({...increment})
        setcart(cartCount+val)
            let flag = 0 
           for(let item of items){
               if(item.name==name)
               {
                flag = 1
                item.count=val
            }
           }
           if(flag==0)
                items.push({"name":name,"price":price,"count":val,"id":id})
      };
      console.log(quality)
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