import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./css/history.css"

const History = () => {
    const [data,setdata] = useState([])
    const url = "http://localhost:8000/history/"
    const id = sessionStorage.getItem('id')
    useEffect(()=>
    {
        axios.post(url,{
            id:id
        }).then((i)=> 
        {
            setdata(i.data['message'])
            console.log(data)
        })
    },[]) 
    return ( 
            <div>
                {
                    data.length==0 ? <h1 style={{textAlign:"center",marginTop:"40px"}}> No history </h1> : data.map((i)=>
                    {
                        return (
                            <div class="historyTop">
                                <div class="history">
                                    <i>Dish name : {i.itemsName}</i><br></br>
                                    <i>Quality : {i.quality} </i><br></br>
                                    <i>Date : {i.date}</i>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
     );
}
 
export default History;