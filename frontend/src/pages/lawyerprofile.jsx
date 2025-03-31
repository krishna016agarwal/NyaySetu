import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"
const LawyerProfile = () => {
 


  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme:"colored",
  };
;

 
  const lawyer = JSON.parse(localStorage.getItem("user"));
  
 
  const [isModalOpen, setIsModalOpen] = useState(false);


 




  const [state, setstate] = useState({
    name:"",
    lawFirm:"",
    Education:"",
    yearofExperience:"",
    practiceAreas:"",
    email:"",
    contactNo:"",
    officeAddress:"",
    registrationNumber:"",
    currentPosition:""
  });




  const handleChange = (e) => {
   
    setstate({ ...state, [e.target.name]: e.target.value });
  };









  const handleSubmit = async (event) => {
  
    event.preventDefault();

    const {
      name,
      lawFirm,
      Education,
      yearofExperience,

      practiceAreas,
      email,
      contactNo,
      officeAddress,
      registrationNumber,
      currentPosition
    } = state;


    const { data } = await axios.post(
      `${
        import.meta.env.MODE === "development"
          ? `http://localhost:3000/api/lawyerupdate/${lawyer._id}`
          : `/api/lawyerupdate/${lawyer._id}`
      }`,
      {
        name,
        lawFirm,
        Education,
        yearofExperience,
        practiceAreas,
        email,
        contactNo,
        officeAddress,
        registrationNumber,
        currentPosition

      }
    );

   
    
    if (data.status === false) {
      toast.error(data.message, toastOptions);
    }
    if (data.status === true) {
      localStorage.setItem("user", JSON.stringify(data.user));

      setstate({  name:"",
        lawFirm:"",
        Education:"",
        yearofExperience:"",
        practiceAreas:"",
        email:"",
        contactNo:"",
        officeAddress:"",
        registrationNumber:"",
        currentPosition :"", });
      toast.success(
        "Update successfully created ",
        toastOptions
      );
      setIsModalOpen(false)
    }
  };

 

  return (


    <div className="max-w-4xl mx-auto mt-6 mb-6 p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Lawyer Image */}
        <div className="w-40 h-40 md:w-80 md:h-48 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sXNRtQJzxdJIaOd9lhnGoN0CpVVw2r7UTQ&s"
            alt="Lawyer"
            className="w-full h-full rounded-lg shadow-md border border-gray-300 object-cover"
          />
        </div>








        {/* Lawyer Details */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold text-blue-800">{lawyer.name}</h1>
          <p className="text-gray-600 font-semibold text-lg">
            {lawyer.currentPosition
            }
          </p>
          <p className="mt-1 text-sm text-gray-500">{lawyer.practiceAreas}</p>

          {/* Contact Information */}
          <div className="mt-4 text-sm text-gray-700 space-y-2">
          <p>
              <strong> 🏬 Firm:</strong> {lawyer.lawFirm}
            </p>
            <p>
              <strong>📜 Education:</strong> {lawyer.Education}
            </p>
            <p>
              <strong>💼 Experience:</strong> {lawyer.yearofExperience} years
            </p>
            <p>
              <strong>💲 Salary:</strong> $50
            </p>
            <p>
              <strong>📧 Email:</strong> {lawyer.email}
            </p>
            <p>
              <strong>📞 Contact:</strong> {lawyer.contactNo}
            </p>
            <p>
              <strong>📍 Address:</strong> {lawyer.officeAddress}
            </p>
            <p>
              <strong>🆔 Registration ID:</strong> {lawyer.registrationNumber}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center ">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>









      {/* MODAL */}
      {isModalOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
       {/* Modal Container */}
       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] flex flex-col">
         <h2 className="text-xl font-bold text-center mb-4">Update Profile</h2>
         
         {/* Scrollable Form Section */}
         <div className="overflow-y-auto flex-1 pr-2">
           <form className="space-y-3">
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
           </form>
         </div>
 
         {/* Buttons Section */}
         <div className="flex justify-between mt-4">
           <button
             type="button"
             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
             onClick={() => setIsModalOpen(false)}
           >
             Cancel
           </button>
           <button
             type="button"
             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
             onClick={handleSubmit}
           >
             Save changes
           </button>
         </div>
       </div>
     </div>
      )}
        <ToastContainer />
    </div>
  );
}
export default LawyerProfile;
