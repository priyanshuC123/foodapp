
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export const Auth=()=>{
    return (
        <div>
            <Login/>
            <Register/>
        </div>
    );
};


const Login = () => {

  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);
    
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          username,
          password,
        });
        alert("login Completed!");
        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div >
          <div><label htmlFor="username">Username: </label></div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div >
          <div><label htmlFor="password">Password:  </label></div>
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="button" type="submit">Login</button>
        </form>
      </div>
    );
  };
  

const Register=()=>{

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:3001/auth/register", {
            username,
            password,
          });
          alert("Registration Completed! Now login.");
        } catch (error) {
          console.error(error);
        }
      };
    return (
    
    <form className="Register" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
        <div><label htmlFor="username">Username: </label></div>
            
            <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
        </div>
        <div>
        <div><label htmlFor="password">Password:  </label></div>
            
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
        </div>

        <button type="submit">Register</button>
    </form>
    
    );
};

