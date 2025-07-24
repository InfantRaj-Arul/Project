import React from "react";
import { useNavigate } from "react-router-dom";

const fields = [
    "Institute ID",
    "Institute Code",
    "Institute Name",
    "Official Email",
    "Status",
    "Contact",
    "Alternate Number",
    "Registered Date",
    "Address",
];

const InstituteInfo: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 w-full">
            <h2 className="text-lg font-semibold mb-4 text-[#0E2B56] border-b border-[#354D7157] pb-2">
                Institute Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fields.map((field, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="mb-1 text-sm text-[#0E2B56] font-medium">{field}</label>
                        <input
                            className="w-full px-4 py-2 rounded-md bg-white/30 placeholder:text-[#0B2447] text-[#0B2447] focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={() => navigate("/edit-institute")}
                    className="bg-white text-[#0B2447] font-semibold px-6 py-2 rounded-md shadow"
                >
                    Edit
                </button>
                <button className="bg-[#0B2447] text-white px-6 py-2 rounded-md shadow">
                    Suspend
                </button>
            </div>
        </div>
    );
};

export default InstituteInfo;
