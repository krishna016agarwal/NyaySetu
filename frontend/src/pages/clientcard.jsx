import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import style from "../pages/clientcard.module.css";

const InfoCard = ({
  id,
  name,
  email,
  contact,
  address,
  date,
  message,
  status,
}) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const handleSubmit = async (prop) => {
   
    const { data } = await axios.post(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/appointment`
          : `/api/appointment`
      }`,
      {
        prop,
        id,
      }
    );
    if (data.status === false) {
      toast.error(data.message, toastOptions);
    }
    if (data.status === true) {
      window.location.reload();
      toast.success("Changes successfully created", toastOptions);
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.details}>
          <p>
            Name: <m>{name}</m>
          </p>
          <p>
            Email: <m>{email}</m>
          </p>
          <p>
            Contact: <m>{contact}</m>
          </p>
          <p>
            Date:<m>{date}</m>{" "}
          </p>
          <p>
            Address: <m>{address}</m>
          </p>

          <p>
            Message:<m> {message}</m>
          </p>
        </div>
        <div
          className={`${style.status} ${
            status == "Accept" ?  style.accept2 : status == "Reject" ? style.reject2:style.status
          }`}
        >
          <p>{status}</p>
        </div>
        <div className={style.button}>
          {status.toLowerCase() !== "accept" && status.toLowerCase() !== "reject" && (
            <>
              <button
                className={style.reject}
                onClick={() => handleSubmit("Reject")}
              >
                Reject
              </button>
              <button
                className={style.accept}
                onClick={() => handleSubmit("Accept")}
              >
                Accept
              </button>
            </>
          )}
           {/* Show Cancel Appointment button if status is Accept */}
  {status.toLowerCase() === "accept" && (
    <button className={style.status2} onClick={() => handleSubmit("Cancel")}>
      Cancel Appointment
    </button>
  )}
    {status.toLowerCase() === "reject" && (
    <button className={style.status3} onClick={() => handleSubmit("Cancel")}>
      Remove
    </button>
  )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default InfoCard;
