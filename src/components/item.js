import { useContext } from "react"
import "./css/item.css"
import { context } from "../App"
const Item = () => {
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
        <div class="top">
        <div class="cart1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSvNZfQIV9FKVAuag9X_dWQfA95pdYQhosQPpnGL_39Br7Jv1Mp6JAIbHZAkYt8jMNlk&usqp=CAU"></img>
    <div class="quantity">
        <p>rs:120</p>
            <button onClick={fun1}class="quantity-btn">-</button>
        <span >{val}</span>
        <button onClick={fun2} class="quantity-btn">+</button>

    </div>
    <div className="buy">
        <button>Add to Cart</button>
    </div>
</div>
</div>

       );
}
export default Item;