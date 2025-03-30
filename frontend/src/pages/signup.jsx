import React from "react";
import style from "./signup.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export const Signup = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    name: "",
    email: "",
    password: "",
    select: ""
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2500,
    pauseOnHover: true,
    draggable: true,
    theme:"colored",
  };
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  var handleValidation = () => {
    const { password, name } = state;

    if (name.length < 4) {
      toast.warning(
        "Username should be greater than 4 character",
        toastOptions
      );
      return false;
    } else if (password.length < 6) {
      toast.warning(
        "Password should be greater than 6 character",
        toastOptions
      );
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");

      window.location.reload();
      navigate("/signup")
      
    }
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();


    if (handleValidation()) {
      const { password, email, name, select } = state;
     if (select==="lawyer") {
    const { data } = await axios.post(
        `${
          import.meta.env.MODE === "development"
            ? `http://localhost:3000/api/lawyersignup`
            : `/api/lawyersignup`
        }`,
        {
          password,
          email,
          name,
        }
      );
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        setstate({ name: "", email: "", password: "" });
        toast.success("Account successfully created", toastOptions);
        navigate("/lawyerdetails")
      }
} else {
    const { data } = await axios.post(
        `${
          import.meta.env.MODE === "development"
            ? `http://localhost:3000/api/usersignup`
            : `/api/usersignup`
        }`,
        {
          password,
          email,
          name,
        }
      );
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        setstate({ username: "", email: "", password: "" });
        toast.success("Account successfully created", toastOptions);
      }
}
      
     
    }
  };
  return (
    <>
      <div className={style.main}>
        
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.brand}>
            {/* <img src={logo} className={style.logo}></img> */}
            <span className={style.title}>NYAYSETU</span>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={state.username}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="email"
            placeholder="Email"
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
          <button type="submit">Signup</button>
          <span>
            Already have an account ?<NavLink to="/login"> Login</NavLink>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
