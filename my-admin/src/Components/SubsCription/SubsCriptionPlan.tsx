import React from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../../Assets/Card1.png";
import image from "../../Assets/image.png";
import tickIcon from "../../Assets/tickIcon.png";
import back2 from "../../Assets/back2.png"; 

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

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: ` url(${back2}) ` }}
    >
      
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" />

      
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
                className="rounded-xl bg-white/10 backdrop-blur-md shadow-xl p-5 text-white flex flex-col justify-between"
              >
                <img
                  src={Card1}
                  alt="Card"
                  className="rounded-md h-28 w-full object-cover mb-4"
                />
                <h3 className="text-lg  text-left font-semibold">{plan.title}</h3>
                <p className="text-sm  text-left text-white/80 mb-3">{plan.description}</p>
                <p className="text-2xl font-bold text-white mb-4">
                  {plan.price}{" "}
                  <span className="text-sm font-normal">/Monthly</span>
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-left  mb-2 text-white/90">
                    FEATURES
                  </p>
                  <ul className="space-y-1">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/90"
                      >
                        <img src={tickIcon} alt="✓" className="w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <button className="bg-white text-black px-4 py-1 text-sm rounded-md">
                    Active
                  </button>
                  <img
                    src={image}
                    alt="Menu"
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsCriptionPlan;
