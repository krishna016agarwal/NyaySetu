import React from "react";

const AboutNyaySetu: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600">
          NyaySetu: Bridging the Justice Gap with AI
        </h1>
        <br/>
        {/* <button className="custom-button">
          <span className="icon">✨</span>
          AI-Powered Legal Assistance
        </button> */}
        <p className="mt-4 text-lg text-gray-500">
          At NyaySetu, we believe that legal assistance should be accessible,
          affordable, and easy to understand for everyone.
        </p>
        
      </div>
      
      
      <section className="why-nyaysetu text-center mt-12">
        <h2 className="text-3xl text-indigo-600 font-bold">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Instant AI Legal Advice", icon: "⚡", desc: "Get real-time legal assistance through AI-powered chatbots." },
            { title: "Verified Legal Experts", icon: "🎯", desc: "Consult with certified legal professionals for accurate advice." },
            { title: "Legal Document Analysis", icon: "🏅", desc: "AI scans and analyzes documents for legal insights." },
            { title: "Case Outcome Predictions", icon: "🗣", desc: "AI models predict case outcomes based on legal data." },
            { title: "Multilingual Support", icon: "🔍", desc: "Legal assistance available in multiple languages." },
            { title: "Legal Consultation Marketplace", icon: "📅", desc: "Book consultations with legal experts anytime, anywhere." },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl">{item.icon}</h3>
              <h3 className="font-bold text-lg mt-2">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="how-it-works text-center mt-12">
        <h2 className="text-3xl text-indigo-600 font-bold">How NyaySetu Works</h2>
        <p className="text-gray-500">Experience seamless legal assistance with AI-powered insights and expert guidance.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[
            { title: "Ask Your Legal Query", icon: "❓", desc: "Type in your question and get AI-generated responses instantly." },
            { title: "Upload & Analyze Documents", icon: "📄", desc: "Let AI extract key legal insights from your legal papers." },
            { title: "Connect with Experts", icon: "👨‍⚖️", desc: "Chat or book a call with experienced lawyers for professional advice." },
            { title: "Understand Case Outcomes", icon: "⚖️", desc: "AI-powered insights to help you make informed legal decisions." },
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:translate-y-2 transition-transform">
              <h3 className="text-2xl">{step.icon}</h3>
              <h3 className="font-bold text-lg mt-2">{step.title}</h3>
              <p className="text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="getstarter_today flex justify-center mt-12">
        <div className="cta-container bg-indigo-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-indigo-800">Your Legal Help, Just a Click Away</h2>
          <p className="text-gray-500 mt-2">
            NyaySetu empowers individuals by making legal assistance affordable,
            accessible, and easy to understand.
          </p>
          <a href="#" className="cta-button inline-block bg-indigo-600 text-white py-3 px-6 rounded-lg mt-4 hover:bg-indigo-800 transition">
            Get Started Today →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutNyaySetu;