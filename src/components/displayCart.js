import { useContext, useState } from "react"
import { Context } from "./navbar"
import Cart from "./cart"
import "./css/cart.css"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
const DisplayCart = () => {
    const id = sessionStorage.getItem('id')
    const url = "http://localhost:8000/orderDetails/"
    const navigate = useNavigate()
    const callhear = ()=>{
        axios.post(url,{
            id : id,
            data : quality[id]
        }).then((i)=>{
            alert("Order plased")
            window.location.href="/items"
            
        })
    }
    const {items,count,setcount,quality} = useContext(Context)
    return ( 
        <div>
            {items.map((item)=>{
                return (
                    <div>
                        <Cart name={item.name} price={item.price} count={item.count} id = {item.id} total={count} setTotal={setcount}></Cart>
                    </div>
            )})}
            <div className="payTop">

                <div className="pay" onClick={()=>callhear()}>
                <h4> Pay  {count} </h4>
                </div>
            </div>
        </div>
     );
}
 
export default DisplayCart;