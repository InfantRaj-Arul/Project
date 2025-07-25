// src/components/ChangePassword.tsx
import React from "react";

const ChangePassword: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 w-full ">
            {/* Institute Info Block */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-white w-full border border-white/20">
                <h1 className="text-base font-semibold mb-4 text-[#0E2B56] ">Institute Detail</h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-[#0E2B56]" />
                        <span className="text-sm font-semibold text-[#0E2B56]">Bharathidasan University</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-[#0E2B56]" />
                        <span className="text-sm text-[#0E2B56]">aureg@bdu.ac.in</span>
                    </div>
                </div>
            </div>


            {/* Password Update Block */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 text-white border border-white/20">
                <h2 className="text-base font-semibold mb-4 text-[#0E2B56] border-b border-[#354D7157] pb-2">
                    Update Password
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col">
                        <label className="text-sm mb-1  text-[#0E2B56] ">Old Password</label>
                        <input
                            type="password"
                            className="p-2 rounded-md bg-white/20 placeholder-white/70 outline-none border border-[#0E2B56]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-1 text-[#0E2B56]">New Password</label>
                        <input
                            type="password"
                            className="p-2 rounded-md bg-white/20 placeholder-white/70 outline-none border border-[#0E2B56]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-1 text-[#0E2B56]">Re-enter Password</label>
                        <input
                            type="password"
                            className="p-2 rounded-md bg-white/20 placeholder-white/70 outline-none border border-[#0E2B56]"
                        />
                    </div>
                </div>

                <button className="px-6 py-2 bg-[#0E2B56] text-white rounded-md font-medium">
                    Update Password
                </button>
            </div>


        </div>
    );
};

export default ChangePassword;
