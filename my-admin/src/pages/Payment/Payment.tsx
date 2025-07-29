import React from "react";
import viewIcon from "../../Assets/viewIcon.png";
import bgImage from "../../Assets/bgImage.jpg";

const feesData = [
  {
    id: "#01",
    institute: "JD Institute",
    plan: "Basic Plan",
    issueDate: "2-24-2025 / 4-27-2025",
    amountPaid: "₹0",
  },
  {
    id: "#02",
    institute: "ABC College",
    plan: "Premium Plan",
    issueDate: "3-01-2025 / 5-01-2025",
    amountPaid: "₹15000",
  },
  {
    id: "#03",
    institute: "XYZ Academy",
    plan: "Exclusive Plan",
    issueDate: "3-15-2025 / 6-15-2025",
    amountPaid: "₹12000",
  },
  {
    id: "#04",
    institute: "Bright Future",
    plan: "Basic Plan",
    issueDate: "4-01-2025 / 6-30-2025",
    amountPaid: "₹0",
  },
  {
    id: "#05",
    institute: "Dream School",
    plan: "Premium Plan",
    issueDate: "4-10-2025 / 7-10-2025",
    amountPaid: "₹15000",
  },
  {
    id: "#06",
    institute: "Knowledge Hub",
    plan: "Exclusive Plan",
    issueDate: "4-20-2025 / 7-20-2025",
    amountPaid: "₹12000",
  },
];

const Payment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-6 py-10">
      <div
        className="relative w-full  bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

        {/* Content */}
        <div className="relative z-10 w-full p-8 text-white bg-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-left text-[#0E2B56] mb-6">
            Fees
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-separate border-spacing-y-4">
              <thead>
                <tr className="bg-[#062c60] text-white">
                  <th className="px-8 py-3 text-left rounded-l-xl">ID</th>
                  <th className="px-8 py-3 text-left">Institute Name</th>
                  <th className="px-8 py-3 text-left">Current Plan</th>
                  <th className="px-14 py-3 text-left">Issue Date</th>
                  <th className="px-6 py-3 text-left">Amount Paid</th>
                  <th className="px-6 py-3 text-left rounded-r-xl">Actions</th>
                </tr>
              </thead>

              <tbody className="text-[#0C2D57] font-medium">
                {feesData.map((fee, index) => (
                  <tr
                    key={index}
                    className="bg-white/30 backdrop-blur-md shadow-md"
                  >
                    <td className="px-6 py-4 rounded-l-xl">{fee.id}</td>
                    <td className="px-6 py-4">{fee.institute}</td>
                    <td className="px-6 py-4">{fee.plan}</td>
                    <td className="px-6 py-4">{fee.issueDate}</td>
                    <td className="px-6 py-4">{fee.amountPaid}</td>
                    <td className="px-6 py-4 rounded-r-xl">
                      <img
                        src={viewIcon}
                        alt="View"
                        className="w-5 h-5 cursor-pointer inline-block"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
