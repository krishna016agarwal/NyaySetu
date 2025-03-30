import React, { useState, useEffect } from "react";
import axios from "axios";
import LawyerCard from "./lawyercard.jsx";
import style from "../pages/findlawyer.module.css"

const FindLawyer = () => {
  const [lawyer, setlawyer] = useState([]);

  async function curr() {
    const data = await axios.get(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/alllawyers`
          : `/api/alllawyers`
      }`
    );
 
    setlawyer(data.data.lawyer);
  }
  useEffect(() => {
    curr();
  }, []);



  return (
    <>
    <div className={style.main}>
    {lawyer.map((prop, index) => (
     
      
        <LawyerCard
          key={index}
          id={prop._id}
          currentPosition={prop.
            currentPosition}
         
          education={prop.Education}
          name={prop.name}
          field={prop.practiceAreas}
          experience={prop.yearofExperience}
          lawfirm={prop.lawFirm}
          contact={prop.contactNo}
          email={prop.email}
          officeaddress={prop.officeAddress}
        ></LawyerCard>
        
      ))}
    </div>
     
    </>
  );
};

export default FindLawyer;
