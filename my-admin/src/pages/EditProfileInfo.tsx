import React from "react";
import backgroundImage from "../assets/About/bg.png"; // outer background
import bginsideImage from "../assets/About/bg1.png";  // inner image background

const EditProfile: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center p-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="min-h-[95vh] bg-cover bg-no-repeat bg-center pt-5 px-5 rounded-2xl"
        style={{ backgroundImage: `url(${bginsideImage})` }}
      >
        <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6 w-full max-w-6xl mx-auto text-white border border-white/20 ">
          <h2 className="text-xl font-semibold mb-6 text-[#0E2B56] border-b border-[#354D7157] pb-2">Edit Institute Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Institute Name", "Registered Date", "State", "City", "Pin Code", "Address Line 1",
              "Address Line 2", "Phone Number", "Alt Phone Number", "Official Email", "Official Website"
            ].map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-1 text-sm text-[#0E2B56] font-medium">{label}</label>
                <input
                  type="text"
                 
                  className="w-full px-4 py-2 rounded-md bg-white/30 text-[#0B2447] placeholder:text-[#0B2447] focus:outline-none"
                />
              </div>
            ))}

            {/* Full Width Description Box */}
            <div className="col-span-full flex flex-col">
              <label className="mb-1 text-sm text-[#0E2B56] font-medium">Description</label>
              <textarea
                
                className="w-full px-4 py- rounded-md bg-white/30 text-[#0B2447] placeholder:text-[#0B2447] focus:outline-none"
                rows={4}
              />
            </div>

            {/* Remaining fields */}
            {[
              "Instagram", "Facebook URI", "Email", "Linkedin", "Twitter URI", "Pinterest URI"
            ].map((label) => (
              <div key={label} className="flex flex-col">
                <label className="mb-1 text-sm text-[#0E2B56] font-medium">{label}</label>
                <input
                  type="text"
                 
                  className="w-full px-4 py-2 rounded-md bg-white/30 text-[#0B2447] placeholder:text-[#0B2447] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
