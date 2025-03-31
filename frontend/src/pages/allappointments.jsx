import React,{useEffect,useState}from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import AppointmentCard from "../pages/appointmentcard.jsx";
const Appointment = () => {
const navigate=useNavigate()
    const [lawyer, setlawyer] = useState([]);
    const client = JSON.parse(localStorage.getItem("user")) || {}; // Provide fallback empty object

    useEffect(() => {
      if (!client || !client._id) {
        navigate("/login");
      }
    }, []);
    
    const clientid = client._id || null; // Prevents error
    




    async function curr() {
      const data = await axios.get(
        `${
          import.meta.env.MODE === "development"
            ? `http://localhost:3000/api/allappointment/${clientid}`
            : `/api/allappointment/${clientid}`
        }`
      );
 
   
      setlawyer(data.data.data);
    }
    useEffect(() => {
      curr();
    }, []);
  
  


    return (
        <>
        {lawyer ?(
          <div className="flex gap-10 mt-4 mb-4 flex-wrap">
                     { lawyer.map((e) => (
            <AppointmentCard prop={e} key={e._id} />
          ))}
          </div>

        ): <p className="bg-white rounded-[15px] mt-[5px] min-w-[20%] m-[20px] h-[20rem] text-lg p-[8px] shadow-md flex justify-center items-center font-bold transition-transform duration-300 ease-in-out text-[#075e54]">No Appointments</p>}
          
        </>
      );
      
}

  export default Appointment