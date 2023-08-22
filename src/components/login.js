import { useContext, useState } from "react"
import "./css/login.css"
import axios from "axios"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Context } from "./navbar"
import {Grid,Item,Paper,TextField, Button} from '@mui/material';



const Login=()=>
{
    const {setDisplay} = useContext(Context)
    setDisplay("none")
    const navigate = useNavigate()
    const [name,setname] = useState("")
    const [password,setPassword] = useState("")
    const calllogin = (e)=>{
        e.preventDefault();
        const url = "http://localhost:8000/userLogin/"
        axios.post(url,{
            username : name,
            password : password
        }).then((data)=>{
            if(data.status==200)
            {
                sessionStorage.setItem("id",data.data['message'])
                alert("Hello "+name+" 🥳")
                navigate("/items")
            }
            else{
                alert("Login faild")
                navigate("/login")
            }
        })
    }
    return (
        <div>
            <Grid container spacing={1} sx={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                    <img src="https://img.freepik.com/free-vector/sticker-template-with-chef-man-holds-pizza-tray-isolated_1308-70512.jpg?size=626&ext=jpg&ga=GA1.2.1967723326.1689254709&semt=ais" style={{marginLeft:"80px",width:"350px",height:"600px"}}></img>
                </Grid>
                <Grid item xs={6} sx={{marginLeft:"-20px"}} >
                        <form onSubmit={calllogin}>
                            <h2>Login 😊</h2>
                            <TextField
                                onChange={(e)=> setname(e.target.value)}
                                label="Username"
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
                            <button class="button" type="submit">Login</button>
                            <div className="register">
                                <span style={{marginRight:"5px"}}>Dont't have an account</span><i><Link style={{padding:"0"}} to="/register"> register</Link></i>
                            </div>
                        </form>
                </Grid>
            </Grid>
        </div>
            
    )
}
export default Login