import React from "react";
import style from "./signup.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    email: "",
    password: "",
    select:""
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2500,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };


  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  

  useEffect(()=>{
    if(localStorage.getItem("user")){
navigate("/")
    }
  },[])


  const handleSubmit = async (event) => {
    event.preventDefault();


  
      const { password, email ,select} = state;
if (select==="lawyer") {
  const { data } = await axios.post(
    `${import.meta.env.MODE==="development" ? `http://localhost:3000/api/lawyerlogin` : `/api/lawyerlogin` }`
   , {
    password,
    email,
    name,
  });

  
  if (data.status === false) {
    toast.error(data.message, toastOptions);
  }
  if (data.status === true) {
    setstate({ username: "", password: "" });
    toast.success("Logged-in successfully ", toastOptions);
    localStorage.setItem("user", JSON.stringify(data.user));
 
  }
  
  navigate("/")
  window.location.reload();
  


} else {
  const { data } = await axios.post(
    `${import.meta.env.MODE==="development" ? `http://localhost:3000/api/userlogin` : `/api/userlogin` }`
   , {
    password,
email,
    name,
  });

  if (data.status === false) {
    toast.error(data.message, toastOptions);
  }
  if (data.status === true) {
    setstate({ username: "", password: "" });
    toast.success("Logged-in successfully ", toastOptions);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.reload();
    navigate("/")
    
  }
}
     
    
  };
  return (
    <>
      <div className={style.main}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.brand}>
       
         <span className={style.title}>NYAYSETU</span>
          </div>
          <input
            type="text"
            placeholder="Register ID / Email"
            name="email"
            required
            value={state.email}
            onChange={(e) => handleChange(e)}
          ></input>
         
                   <select id="options" name="select" className={style.select} value={state.select} onChange={handleChange}  >
                   <option value="" disabled defaultValue>Select an Option</option>
                     <option value="lawyer">Lawyer</option>
                     <option value="client">Client</option>
                    
                   </select>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={state.password}
            onChange={(e) => handleChange(e)}
          ></input>
          <button type="submit">Login</button>
          <span>
            Don't have an account ?<NavLink to="/signup"> Signup</NavLink>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
