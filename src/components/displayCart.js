import { useContext, useState } from "react"
import { Context } from "./navbar"
import Cart from "./cart"
import "./css/cart.css"
const DisplayCart = () => {
    const callhear = ()=>{
        console.log("hrllo")
    }
    const {items,count,setcount} = useContext(Context)
    return ( 
        <div>
            {items.map((item)=>{
                return (
                    <div>
                        <Cart name={item.name} price={item.price} count={item.count} total={count} setTotal={setcount}></Cart>
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