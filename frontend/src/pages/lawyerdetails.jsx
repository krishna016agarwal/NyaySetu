import React from "react";
import style from "./lawyerdetails.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import logo from "../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export const Lawyerdetails = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    email: "",
    registrationNumber: null,
    yearofExperience: null,
    contactNo: null,
    officeAddress: "",
    lawFirm: "",
    currentPosition: "",
    practiceAreas: "",
    Education: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const {
      email,
      registrationNumber,
      yearofExperience,
      contactNo,
      officeAddress,
      lawFirm,
      currentPosition,
      practiceAreas,
      Education,
    } = state;

    const { data } = await axios.post(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/lawyerdetails`
          : `/api/lawyerdetails`
      }`,
      {
        email,
        registrationNumber,
        yearofExperience,
        contactNo,
        officeAddress,
        lawFirm,
        currentPosition,
        practiceAreas,
        Education,
      }
    );
    if (data.status === false) {
      toast.error(data.message, toastOptions);
    }
    if (data.status === true) {
      setstate({
        email: "",
        registrationNumber: null,
        yearofExperience: null,
        contactNo: null,
        officeAddress: "",
        lawFirm: "",
        currentPosition: "",
        practiceAreas: "",
        Education: "",
      });
      toast.success("Account successfully created", toastOptions);
      setTimeout(()=>{ navigate("/login");},3000)
     
    }
  };
  return (
    <>
      <div className={style.main}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.brand}>
            {/* <img src={logo} className={style.logo}></img> */}
            <span className={style.title}>NYAYMITRA</span>
          </div>
          <div className={style.section}>
            <div className={style.left}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                required
                value={state.email}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                placeholder="Registration Number"
                name="registrationNumber"
                required
                value={state.registrationNumber}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                placeholder=" Year of Experience"
                name="yearofExperience"
                required
                value={state.yearofExperience}
                onChange={(e) => handleChange(e)}
              ></input>

              <input
                type="text"
                placeholder=" Contact No"
                name="contactNo"
                required
                value={state.contactNo}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                placeholder=" Law Firm "
                name="lawFirm"
                required
                value={state.lawFirm}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div className={style.right}>
              <input
                type="text"
                placeholder="Current Position"
                name="currentPosition"
                required
                value={state.currentPosition}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                placeholder=" Practice Areas "
                name="practiceAreas"
                required
                value={state.practiceAreas}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                placeholder="Education"
                name="Education"
                required
                value={state.Education}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                type="text"
                placeholder=" Office Address"
                name="officeAddress"
                required
                value={state.officeAddress}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>

          <button type="submit">Signup</button>
          <span>Please Fill out the Details</span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
