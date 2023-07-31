import axios from "axios";
import Item from "./item";
import { useContext, useEffect, useState } from "react";
import { Context } from "./navbar";
const DisplayItems = () => {
    const [details,setdetails] = useState([])
    const {count,setcount} = useContext(Context) 
    const url = "http://127.0.0.1:8000/getDetails/"
    useEffect(() => {
        axios
          .get(url)
          .then(({ data }) => {
            setdetails(data);
          })
          .catch((error) => {
            console.error("Error fetching details:", error);
          });
      }, []);
    return ( 
        <div>
            {details.map((i)=>(
                <Item name={i.name} img={i.img} price={i.price} total={count} settotal={setcount}></Item>
            ))}
        </div>
    );
}
 
export default DisplayItems;