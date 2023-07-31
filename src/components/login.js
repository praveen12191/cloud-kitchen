import "./css/login.css"


const Login=()=>
{
    return (
        <div>
            <div className="topLogin">
                <div className="login" >
                    <form>
                        <i> Login here 😉</i><br></br>
                        <lable>User Name :</lable>
                        <input type="text"></input><br></br>
                        <label>Password :</label>
                        <input type="password"></input><br></br>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login