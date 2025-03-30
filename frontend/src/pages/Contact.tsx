import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white p-4 text-center text-2xl font-bold animate-fadeIn">NyaySetu</header>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 p-10">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
          <h2 className="text-center text-3xl text-gray-900 font-bold mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-8">Get in touch with our team for any queries.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-2">Message</label>
              <textarea id="message" rows={5} placeholder="Enter your message" required className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-purple-700 text-white py-3 text-lg font-bold rounded-lg hover:opacity-90">Submit</button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[470px] bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
          <iframe
            title="Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?q=Yash%20PG%20near%20MAIT%20College%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>

      {/* Info Blocks */}
      <div className="flex flex-col items-center gap-8 p-10">
        {[
          { label: 'Email', value: 'support@nyaysetu.com', link: 'mailto:support@nyaysetu.com' },
          { label: 'Phone', value: '+91 98767XXXXX', link: 'tel:+919876543210' },
          { label: 'Address', value: 'New Delhi, India' },
          { label: 'Hours', value: 'Mon-Fri: 9am - 6pm' }
        ].map((info, index) => (
          <div key={index} className="w-4/5 md:w-3/5 bg-gray-100 p-6 rounded-lg shadow-lg text-center text-lg font-bold hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-purple-400 hover:text-white transition-transform">
            <strong>{info.label}:</strong> <br />
            {info.link ? <a href={info.link} className="text-blue-900 hover:text-white">{info.value}</a> : info.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
