

import style from "../pages/clientcard.module.css";

const AppointmentCard = ({ prop }) => {



  return (
    <>
      <div className={style.main}>
        <div className={style.details}>
          <p className="flex justify-center font-bold ">Lawyer Details</p>
          <p>
          🧑🏻‍💼 Name: <m>{prop.lawyerDetails.name}</m>
          </p>
          <p>
          📧 Email: <m>{prop.lawyerDetails.email}</m>
          </p>
          <p>
          📞 Contact: <m>{prop.lawyerDetails.contactNo}</m>
          </p>
          <p>
          🏬  Firm: <m>{prop.lawyerDetails.lawFirm}</m>
          </p>
        
          <p>
          📍 Address: <m>{prop.lawyerDetails.officeAddress}</m>
          </p>
        </div>
        <div
          className={`${style.status4} flex flex-col justify-center items-center ${
            prop.status === "Accept" ? "bg-[#bfe8a6] " :  prop.status === "Reject"?"bg-[rgb(255,170,170)]": "bg-[#ffffff;]"
          }`}
          
        >
          {" "}
          <span className="font-bold">Case Details</span>
          <p>
            Date: <m>{new Date(prop.date).toDateString()}</m>{" "}
          </p>
          <p className="text-[#87b4fc] font-bold">{prop.status}</p>

        </div>
        

       
      </div>
    </>
  );
};

export default AppointmentCard;
