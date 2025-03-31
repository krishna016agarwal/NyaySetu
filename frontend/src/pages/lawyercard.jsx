import React,{useState,useEffect} from "react";
import style from "./lawyerbook.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";
const LawyerCard = (props) => {
 const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme:"colored",
  };
   const navigate = useNavigate();
 


  const getRandomStars = () => {
    const stars = Math.floor(Math.random() * 5) + 1; // Generate random stars between 1 and 5
    return '⭐'.repeat(stars) + '☆'.repeat(5 - stars); // Fill remaining with empty stars
};
const reviewsList = [
  { name: "Alice Johnson", comment: "An amazing lawyer, very professional!", time: "10:30 AM" },
  { name: "Michael Smith", comment: "Helped me with my case efficiently.", time: "12:15 PM" },
  { name: "Jessica Brown", comment: "Highly recommend, very supportive.", time: "2:45 PM" },
  { name: "Daniel Lee", comment: "Could improve response time.", time: "3:20 PM" },
  { name: "Sophia Davis", comment: "Really satisfied with the service!", time: "5:00 PM" },
  { name: "Emily White", comment: "Good experience, but a bit expensive.", time: "6:30 PM" },
  { name: "James Anderson", comment: "Great legal expertise.", time: "8:00 AM" },
  { name: "Olivia Taylor", comment: "Quick and effective, very professional!", time: "9:15 AM" },
  { name: "William Harris", comment: "Helped me win my case easily!", time: "11:50 AM" },
  { name: "Lucas Wilson", comment: "Decent experience, but expected more.", time: "1:25 PM" }
];

const getRandomReviews = () => {
  let shuffled = reviewsList.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};
const [showPopup, setShowPopup] = useState(false);
const [showPopup2, setShowPopup2] = useState(false);
const randomReviews = getRandomReviews();






  const [state, setstate] = useState({
    name:"",
    email:"",
    contact:"",
    address:"",
    message:""
  })


  const handleChange = (e) => {
   
    setstate({ ...state, [e.target.name]: e.target.value });
  };


  const handleSubmit=async(props)=>{
  
    const client= JSON.parse(localStorage.getItem("user"))

 
    if (!client) {
      navigate("/login")
    }
    const clientId=client._id;
    const {address,message,contact,email,name} =state
  const data  = await axios.post(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/lawyerclient`
          : `/api/lawyerclient`
      }`,
      {
        lawyer:props.id,client:clientId,caseType:props.field,date:new Date(Date.now()).toLocaleDateString(),status:"Pending",address:address,message:message,contact:contact,name:name,email:email
      }
    );
  
    if (data) {
   toast.success("Appointment successfully Booked", toastOptions);
      
    }
    setShowPopup2(false)
    
  }


  return (
    <div className={style.card}>
     <img className={style.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sXNRtQJzxdJIaOd9lhnGoN0CpVVw2r7UTQ&s" alt="lawyer" /> 

    <h3 className={style.name}>{props.name}</h3>
    <div className={style.rating}>{getRandomStars()}</div>
    <p className={style.description}>
        Field: {props.field} <br/>
        Experience: {props.experience} years <br/>
        Firm: {props.lawfirm}
    </p>
    <p className={style.contact}>📞 {props.contact}</p>
    <p className={style.email}>✉️ {props.email}</p>
    <p className={style.address}>📍 {props.officeaddress}</p>
    <div className={style.buttons}>
        <button className={style.readMore} onClick={() => setShowPopup(true)}>Read More</button>
        <button className={style.subscribe} onClick={() => setShowPopup2(true)}>Book Appointment</button>
        <ToastContainer />
    </div>
   
    {showPopup && (
        <div className={style.popup} onMouseDown={() => setShowPopup(false)}>
            <div className={style.popupContent} onMouseDown={(e) => e.stopPropagation()}>
                <span className={style.close} onClick={() => setShowPopup(false)}>&times;</span>
                <h2>{props.name}</h2>
                <p><strong>Current Position:</strong> {props.currentPosition}</p>
                <p><strong>Practice Area:</strong> {props.field}</p>
               
                <p><strong>Experience:</strong> {props.experience} years</p>
                <p><strong>Firm:</strong> {props.lawfirm}</p>
               
                <p><strong>Consultation Fee:</strong> $50</p>
                <p><strong>Education:</strong> {props.education}</p>
                <p><strong>Contact No:</strong> {props.contact}</p>
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Address:</strong> {props.officeaddress}</p>
                <div className={style.popupReviews}>
                            <strong>Reviews:</strong>
                            {randomReviews.map((review, index) => (
                                <p key={index}><strong>{review.name}</strong> ({review.time}): {review.comment}</p>
                            ))}
                        </div>
            </div>
        </div>
    )}

    {showPopup2 && (
        <div className={style.popup}>
        <div className={style.popupContent}>
           <strong><span className="flex justify-center items-cente  text-lg">Contact Details</span></strong>
            <form2>
            {Object.keys(state).map((key) => (
               <div key={key} className="flex flex-col">
                 <label htmlFor={key} className="font-medium">{key.toUpperCase().trim()} :</label>
                 <input
                   type="text"
                   id={key}
                   name={key}
                   value={state.key}
                   onChange={(e) => handleChange(e)}
                   className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                   placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                 />
              
               </div>
             ))}
             </form2>
             <div className="flex justify-between mt-4">
           <button
             type="button"
             className="bg-[#3b82f6]  text-white px-4 py-2 rounded  transition"
             onClick={() => setShowPopup2(false)}
           >
             Cancel
           </button>
           <button
             type="button"
             className="bg-[#9333ea]  text-white px-4 py-2 rounded  transition"
             onClick={()=> handleSubmit(props)}
           >
             Book Appointment
           </button>
         </div>
        </div>
    </div>
    )}
</div>
        
  
  );
};

export default LawyerCard;



