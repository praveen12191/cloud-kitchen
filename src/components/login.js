import "./css/login.css"

const Login=()=>
{
    console.log(1213);
    return (
        <div>
            <div className="login">
                <form>
                    <lable>User Name :</lable>
                    <input type="text"></input><br></br>
                    <label>Password :</label>
                    <input type="password"></input><br></br>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login