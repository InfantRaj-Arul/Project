import React from "react";
import { useNavigate } from "react-router-dom";
import back2 from "../../Assets/back2.png";
import pro from "../../Assets/pro.png";

const PlanForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${back2})` }}
    >
      <div className="w-full max-w-6xl bg-text-[#0C2D57] bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-[#0C2D57] font-semibold">
            Subscriptions Plan
          </h2>
          <button className="bg-[#0C2D57] px-4 py-2 rounded-md text-white text-sm flex items-center">
            <span className="text-xl mr-1">+</span>
            <span className="text-sm">Add Institute</span>
          </button>
        </div>

        <h3 className="text-lg text-left font-semibold mb-6 text-[#0C2D57]">
          Enter Your Institute Details Here
        </h3>

        {/* Profile Upload */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={pro}
            alt="Profile"
            className="w-32 h-32 rounded-md bg-white"
          />
          <p className="mt-2 font-semibold text-[#0C2D57]">
            Upload Profile Picture
          </p>
          <p className="text-sm text-[#0C2D57]">PNG or JPEG (Max 800K)</p>
        </div>

        {/* Plan Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block text-left text-[#0C2D57]">
              Plan Name
            </label>
            <input className="input-style" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block text-left text-[#0C2D57]">
              Plan Price
            </label>
            <input className="input-style" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block text-left text-[#0C2D57]">
              Support Level
            </label>
            <input className="input-style" />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-1 block text-left text-[#0C2D57]">
            Plan Description
          </label>
          <textarea className="input-style h-20" />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-[#0C2D57]">
          {[
            "Duration",
            "Duration Type",
            "Number of Students",
            "Number of Admins",
            "Number of Teachers",
            "Number of Batches",
            "Number of Courses",
            "Number of Classes",
          ].map((label, index) => (
            <div key={index}>
              <label className="text-sm font-medium mb-1 block text-left">
                {label}
              </label>
              <input className="input-style mb-2" />
              {label.includes("Number") && (
                <label className="flex items-center gap-2 text-sm mt-1">
                  <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border border-black rounded-sm checked:bg-black"
                  />
                  Check for Unlimited {label.split(" ")[2]}
                </label>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-white text-black px-6 py-2 rounded-md"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button className="bg-[#0C2D57] text-white px-6 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
