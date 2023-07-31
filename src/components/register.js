import { Navigate, useNavigate } from "react-router-dom";
import "./css/login.css";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [locationPermission, setLocationPermission] = useState(false);
  const navigate = useNavigate();

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get latitude and longitude from the Geolocation API
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Use a reverse geocoding service to get the address from latitude and longitude
          // Replace 'YOUR_API_KEY' with your actual API key from a geocoding service provider
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

  const callitem = () => {
    alert(name + phone + password + address);
    console.log("submit");
    navigate("/items");
  };

  return (
    <div>
      <div className="topLogin">
        <div className="login">
          <i>Register here 😃</i>
          <br></br>
          <form onSubmit={callitem}>
            <label>User Name :</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br></br>
            <label>Phone number :</label>
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
            <br></br>
            <label>Password :</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <label>Address :</label>
            {locationPermission ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            ) : (
              <button type="button" onClick={() => getLocation()}>
                Get My Location
              </button>
            )}
            <br></br>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
