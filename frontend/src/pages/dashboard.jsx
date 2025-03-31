import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dashboarddata, setDashboarddata] = useState({ client: [], lawyer: [], appointment: [] });

  async function fetchData() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.MODE === "development" ? "http://localhost:3000/api/dashboard" : "/api/dashboard"}`
      );
      setDashboarddata(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold">Total Lawyers</h2>
          <p className="text-2xl font-bold text-blue-600">{dashboarddata.lawyer.length}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold">Total Clients</h2>
          <p className="text-2xl font-bold text-green-600">{dashboarddata.client.length}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold">Total Appointments</h2>
          <p className="text-2xl font-bold text-red-600">{dashboarddata.appointment.length}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lawyers Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Lawyers</h2>
          {dashboarddata.lawyer.length > 0 ? (
            dashboarddata.lawyer.map((lawyer, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded mb-2 shadow-sm border border-gray-300">
                <p><strong>Name:</strong> {lawyer.name.toUpperCase()}</p>
                <p><strong>Contact:</strong> {lawyer.contactNo}</p>
                <p><strong>Email:</strong> {lawyer.email}</p>
                <p><strong>Address:</strong> {lawyer.officeAddress}</p>
                <p><strong>Education:</strong> {lawyer.Education}</p>
                <p><strong>Current Position:</strong> {lawyer.currentPosition}</p>
                <p><strong>Practice Area:</strong> {lawyer.practiceAreas}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Lawyers Available</p>
          )}
        </div>
        
        {/* Clients Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Clients</h2>
          {dashboarddata.client.length > 0 ? (
            dashboarddata.client.map((client, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded mb-2 shadow-sm border border-gray-300">
                <p><strong>Name:</strong> {client.name.toUpperCase()}</p>
                <p><strong>Email:</strong> {client.email}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Clients Available</p>
          )}
        </div>

        {/* Appointments Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Appointments</h2>
          {dashboarddata.appointment.length > 0 ? (
            dashboarddata.appointment.map((appointment, index) => (
              <div 
                key={index} 
                className={`p-4 rounded mb-2 shadow-sm border border-gray-300 ${appointment.status === "Accept" ? "bg-green-200" : appointment.status === "Reject" ? "bg-red-200" : "bg-gray-50"}`}
              >
                <p><strong>Lawyer Name:</strong> {appointment.lawyerDetails.name.toUpperCase()}</p>
                <p><strong>Client Name:</strong> {appointment.name.toUpperCase()}</p>
                <p><strong>Client Email:</strong> {appointment.email}</p>
                <p><strong>Client Contact:</strong> {appointment.contact}</p>
                <p><strong>Date:</strong> {new Date(appointment.date).toDateString()}</p>
                <p><strong>Status:</strong> {appointment.status}</p>
                <p><strong>Client Message:</strong> {appointment.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No Appointments Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
