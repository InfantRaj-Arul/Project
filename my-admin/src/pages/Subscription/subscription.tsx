import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../../Assets/Card1.png";
import Button from "../../Assets/Button.png";
import tickIcon from "../../Assets/tickIcon.png";
import bgImage from "../../Assets/bgImage.jpg";

const plans = [
  {
    title: "Basic Plan – Free",
    description: "The Plan is for everyone",
    price: "₹0",
    features: [
      "Admins: 5",
      "Students: 5",
      "Teachers: 10",
      "Batches: 3",
      "Courses: 15",
      "Classes: 30",
    ],
  },
  {
    title: "Premium",
    description: "The Plan is for premium plan",
    price: "₹15000",
    features: [
      "Admins: 700",
      "Students: 120",
      "Teachers: 01",
      "Batches: 60",
      "Courses: 45",
      "Classes: 50",
    ],
  },
  {
    title: "Exclusive Plan",
    description: "The Plan is for exclusive plan",
    price: "₹12000",
    features: [
      "Admins: 5",
      "Students: 10",
      "Teachers: 2",
      "Batches: 5",
      "Courses: 8",
      "Classes: 20",
    ],
  },
];

const SubsCriptionPlan: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 py-10">
      <div
        className="relative w-full  bg-cover bg-center rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" />

        {/* Main content */}
        <div className="relative z-10 px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#0E2B56]">
                Subscriptions Plan
              </h2>
              <button
                className="bg-[#0C2D57] text-white text-sm px-4 py-2 rounded-md font-medium flex items-center gap-2"
                onClick={() => navigate("/add-institute")}
              >
                <span className="text-lg">＋</span> Add Institute
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="w-full max-w-[350px] mx-auto rounded-xl bg-white/10 backdrop-blur-md shadow-xl p-5 text-white flex flex-col justify-between min-h-[700px]"
                >
                  <img
                    src={Card1}
                    alt="Card"
                    className="rounded-md h-45 w-full object-cover mb-4"
                  />

                  {/* Title */}
                  <div className="mb-2 text-left">
                    <h3 className="text-2xl font-semibold text-white">
                      {plan.title}
                    </h3>
                    <p className="-mt-1 text-sm text-white/80">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <p className="text-4xl font-bold text-white mb-4">
                    {plan.price}{" "}
                    <span className="text-sm font-normal">/Monthly</span>
                  </p>

                  {/* Features */}
                  <div className="mb-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-inner">
                    <p className="text-sm font-semibold text-left mb-2 text-white/90">
                      FEATURES
                    </p>
                    <ul className="space-y-1">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-white/90 min-h-[25px]"
                        >
                          <img src={tickIcon} alt="✓" className="w-4 h-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center relative">
                    <button
                      onClick={() => setActiveIndex(index)}
                      className={`px-4 py-1 text-sm rounded-md transition-colors duration-200 ${
                        activeIndex === index
                          ? "bg-[#5179B3] text-white"
                          : "bg-white/20 text-white border border-white/30"
                      }`}
                    >
                      {activeIndex === index ? "Active" : "Activate"}
                    </button>

                    {/* Dropdown Menu */}
                    <div className="relative">
                      <img
                        src={Button}
                        alt="Menu"
                        className="w-5 h-5 cursor-pointer"
                        onClick={() =>
                          setOpenMenuIndex(openMenuIndex === index ? null : index)
                        }
                      />

                      {openMenuIndex === index && (
                        <div className="absolute right-0 mt-2 w-32 bg-white text-[#0C2D57] rounded-md shadow-lg z-50 text-sm">
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-[#5179B3]"
                            onClick={() => {
                              console.log("Edit clicked:", plan.title);
                              setOpenMenuIndex(null);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="w-full text-left px-4 py-2 hover:bg-[#5179B3]"
                            onClick={() => {
                              console.log("Delete clicked:", plan.title);
                              setOpenMenuIndex(null);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsCriptionPlan;
