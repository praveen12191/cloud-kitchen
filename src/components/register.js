import { Link, useNavigate } from "react-router-dom";
import "./css/login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "./navbar";
import {Grid,Item,Paper,TextField, Button} from '@mui/material';
export default function Register(){
  const {setDisplay} = useContext(Context)
  setDisplay("None")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [lat,setlat] = useState("")
  const [long,setlong] = useState("")
  const [address,setAddress] = useState("")
  const [locationPermission, setLocationPermission] = useState(false);
  const navigate = useNavigate();
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get latitude and longitude from the Geolocation API
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setlat(latitude)
          setlong(latitude)
          console.log(latitude)
          console.log(lat +","+long)
          // Use a reverse geocoding service to get the address from latitude and longitude
          // Replace 'YOUR_API_KEY' with your actual API key from a geocoding service provide
          const geocodingApiKey = "YOUR_API_KEY";
          const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${geocodingApiKey}`;
          fetch(geocodingApiUrl)
            .then((response) => response.json())
            .then((data) => {
              if (data.results.length > 0) {
                setAddress(data.results[0].formatted_address);
              }
            })
            .catch((error) => console.error("Error fetching address:", error));
        },
        (error) => console.error("Error getting user location:", error)
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  const callitem = (e) => {
    e.preventDefault();
    console.log("submit");
    let url = "http://localhost:8000/userRegister/"
    axios.post(url,{
      username: name,
      phonenumber : phone,
      password : password,
      address : lat+","+long
    }).then((data)=>{
      if(data.status==200)
      {
        alert("register sucess")
        navigate("/")
      }
      else{
        alert(data.data['message'])
        navigate("/register")
      }
    })
  };
  return (
    <div>
        <Grid container spacing={1} sx={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                    <img src="https://img.freepik.com/free-vector/sticker-template-with-chef-man-holds-pizza-tray-isolated_1308-70512.jpg?size=626&ext=jpg&ga=GA1.2.1967723326.1689254709&semt=ais" style={{marginLeft:"80px",width:"350px",height:"600px"}}></img>
                </Grid>
                <Grid item xs={6} sx={{marginLeft:"-20px"}} >
                        <form onSubmit={callitem}>
                            <h2>Register 😀</h2>
                            <TextField
                                onChange={(e)=> setName(e.target.value)}
                                label="Username"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField
                                onChange={(e)=> setPhone(e.target.value)}
                                label="Phone Number"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <TextField
                                onChange={(e)=> setPassword(e.target.value)}
                                type="password"
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                            />
                            <button class="button" type="button" onClick={() => getLocation()}>
                                Get My Location
                            </button>
                            <button class="button" type="submit">Register</button>
                        </form>
                </Grid>
            </Grid>
    </div>
  );
};



