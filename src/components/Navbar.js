import React from 'react'
import {Link} from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

 const Navbar=()=> {
    
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
  
    const logout = () => {
      setCookies("access_token", "");
      window.localStorage.clear();
      navigate("/auth");
    };

    
    return (
      <div className='navbar'>
      <Link className="link" to="/">Home</Link>
      
      
      {!cookies.access_token ? (
        <Link className="link" to="/auth">Login/Register</Link>
      ) : (
  <><Link className="link" to="/CreateRecipe">CreateRecipe</Link>
  <Link className="link" to="/SavedRecipe">SavedRecipe</Link>
  <button className="btn" onClick={logout}> Logout </button>
  </>
       
      )}
      </div>
    )
  }


export default Navbar