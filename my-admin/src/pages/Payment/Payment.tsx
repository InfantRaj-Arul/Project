import React from "react";
import viewIcon from "../../Assets/viewIcon.png";


const feesData = Array(6).fill({
  id: "#1",
  institute: "JD",
  plan: "Basic Plan",
  issueDate: "2-24-2025 / 4-27-2025",
  amountPaid: "$0",
});




const payment = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-10"
      
    >
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white">
        <h2 className="text-2xl font-semibold text-[#0E2B56] text-left mb-6">Fees</h2>

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

            <tbody className="text-[#5E7795]">
              {feesData.map((fee, index) => (
                <tr
                  key={index}
                  className="bg-white/20 backdrop-blur-md shadow-md"
                >
                  <td className="px-6 py-4 rounded-l-xl">{fee.id}</td>
                  <td className="px-6 py-4">{fee.institute}</td>
                  <td className="px-6 py-4">{fee.plan}</td>
                  <td className="px-6 py-4">{fee.issueDate}</td>
                  <td className="px-6 py-4">{fee.amountPaid}</td>
                  <td className="px-6 py-4 rounded-r-xl">
                    <img
                      src={viewIcon}
                      alt="view"
                      className="w-5 h-5 cursor-pointer"
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
}

export default payment
