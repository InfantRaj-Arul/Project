import React from "react";
import viewIcon from "../../Assets/viewIcon.png";
import bgImage from "../../Assets/bgImage.jpg";

const feesData = Array(6).fill({
  id: "#1",
  institute: "JD",
  plan: "Basic Plan",
  issueDate: "2-24-2025 / 4-27-2025",
  amountPaid: "$0",
});

const Payment = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Optional overlay if needed */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-6xl p-8 rounded-2xl shadow-lg text-white bg-white/10 backdrop-blur-md">
        <h2 className="text-2xl font-semibold   text-left text-[#0E2B56] mb-6">Payments</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-separate border-spacing-y-4">
            <thead>
              <tr className="bg-[#062c60] text-white">
                <th className="px-6 py-3 text-left rounded-l-xl">ID</th>
                <th className="px-6 py-3 text-left">Institute Name</th>
                <th className="px-6 py-3 text-left">Current Plan</th>
                <th className="px-6 py-3 text-left">Issue Date</th>
                <th className="px-6 py-3 text-left">Amount Paid</th>
                <th className="px-6 py-3 text-left rounded-r-xl">Actions</th>
              </tr>
            </thead>

            <tbody className="text-[#0C2D57] font-medium">
              {feesData.map((fee, index) => (
                <tr
                  key={index}
                  className="bg-white/30 backdrop-blur-md shadow-md rounded-xl"
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
  );
};

export default Payment;
