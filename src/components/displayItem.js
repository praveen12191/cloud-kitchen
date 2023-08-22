import axios from "axios";
import Item from "./item";
import { useContext, useEffect, useState } from "react";
import { Context } from "./navbar";
import {Grid,Paper,TextField, Button} from '@mui/material';

const DisplayItems = () => {
    const [details,setdetails] = useState([])
    const {count,setcount,increment,setincrement} = useContext(Context) 
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
{details.length % 2 === 0 && (
    <Grid container>
        {details.map((i) => (
            <Grid item key={i.id} xs={6} sm={6} lg={6} md={6}>
                <Item
                    name={i.name}
                    img={i.img}
                    price={i.price}
                    total={count}
                    settotal={setcount}
                    id={i.id}
                />
            </Grid>
        ))}
    </Grid>
)}
{details.length % 2 === 1 && (
    <Grid container>
        {details.map((i, index) => (
            (index != details.length-1)?(
               
                <Grid item key={i.id} xs={6} sm={6} lg={6} md={6}>
                    <Item
                        name={i.name}
                        img={i.img}
                        price={i.price}
                        total={count}
                        settotal={setcount}
                        id={i.id}
                    />
                </Grid>
      
            ):
            index==details.length-1 && (
              <Grid item key={i.id} xs={12} sm={12} lg={12} md={12}>
                    <Item
                        name={i.name}
                        img={i.img}
                        price={i.price}
                        total={count}
                        settotal={setcount}
                        id={i.id}
                    />
                </Grid>
            )
        ))}
    </Grid>
)}

        </div>
    );
}
 
export default DisplayItems;