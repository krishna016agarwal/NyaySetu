import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../pages/lawyerhome.module.css";
import InfoCard from "../pages/clientcard.jsx";
const LawyerAppointments = () => {
 

 

  const [clients, setclients] = useState([]);

  const lawyer = JSON.parse(localStorage.getItem("user"))._id;

  async function curr() {
    const data = await axios.get(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/allclients/${lawyer}`
          : `/api/allclients/${lawyer}`
      }`
    );

    setclients(data.data.clients);
  }
  useEffect(() => {
    curr();
  }, []);

  

  return (
    <>
    
    {clients.length > 0 ? (
  <>
    <span2>Appointments</span2>
    <div className={style.main}>
      {clients.map((prop, index) => (
        <InfoCard
          key={index}
          id={prop._id}
          name={prop.name}
          email={prop.email}
          contact={prop.contact}
          address={prop.address}
          date={prop.date}
          message={prop.message}
          status={prop.status}
        />
      ))}
    </div>
  </>
) : (
 
  <div className={style.main2}>
     <span3 >No Appointments</span3>
  </div>
)}

    </>
  );
};

export default LawyerAppointments;
