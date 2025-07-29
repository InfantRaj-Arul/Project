import React, { useState } from 'react';
import bg4 from '../../assets/containerimg.png';
import line from '../../assets/Line.png';
import { useNavigate } from "react-router-dom";
import '../../index.css';

const AddInstitute: React.FC = () => {
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = useState(1);
    return (

        <div className="relative inset-0 z-0 bg-cover bg-center rounded-lg" style={{
            backgroundImage: `url(${bg4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-y',
        }}>
            <div className="relative min-h-screen overflow-hidden">
                {/* Step Progress Bar */}
                <div className=" sticky top-0 z-20 ">
                    <div className="grid grid-flow-col gap-0 mb-6 mt-5 mr-0">
                        {/* 1st column (wide) */}
                        <div className="w-[190px] h-[180px] flex flex-col items-center justify-center text-3xl">
                            {/* <img src={icon1} alt="icon" className="w-[48px] h-[48px] mb-2" /> */}
                            <button
                                onClick={() => setActiveStep(1)}
                                className={`w-[48px] h-[48px] mb-2 rounded-lg text-white font-bold text-[20px] transition duration-200 shadow
                    ${activeStep === 1 ? 'bg-[#0E2B56]' : 'bg-[#AFD6E7] hover:bg-[#0E2B56]'}`}
                            >
                                1
                            </button>
                            <span className="text-[16px] text-center">
                                Personal Info
                            </span>
                        </div>

                        {/* 2nd column (narrow) */}
                        <div className="w-[50px] h-[180px] flex items-center justify-center text-xl">
                            <img src={line} />
                        </div>

                        {/* 3rd column */}
                        <div className="w-[206px] h-[180px] flex flex-col items-center justify-center text-3xl">
                            <button
                                onClick={() => setActiveStep(2)}
                                className={`w-[48px] h-[48px] mb-2 rounded-lg text-white font-bold text-[20px] transition duration-200 shadow
                    ${activeStep === 2 ? 'bg-[#0E2B56]' : 'bg-[#AFD6E7] hover:bg-[#0E2B56]'}`}
                            >
                                2
                            </button>
                            <span className="text-[16px] text-center text-[#CFE5F0]">
                                Gallery Info
                            </span>
                        </div>

                        {/* 4th column */}
                        <div className="w-[50px] h-[180px] flex items-center justify-center text-xl">
                            <img src={line} />
                        </div>

                        {/* 5th column */}
                        <div className="w-[190px] h-[180px] flex flex-col items-center justify-center text-3xl">
                            <button
                                onClick={() => setActiveStep(3)}
                                className={`w-[48px] h-[48px] mb-2 rounded-lg text-white font-bold text-[20px] transition duration-200 shadow
                    ${activeStep === 3 ? 'bg-[#0E2B56]' : 'bg-[#AFD6E7] hover:bg-[#0E2B56]'}`}
                            >
                                3
                            </button>
                            <span className="text-[16px] text-center text-[#CFE5F0]">
                                Social Link
                            </span>
                        </div>

                        {/* 6th column */}
                        <div className="w-[50px] h-[180px] flex items-center justify-center text-xl">
                            <img src={line} />
                        </div>

                        {/* 7th column */}
                        <div className="w-[190px] h-[180px] flex flex-col items-center justify-center text-3xl">
                            <button
                                onClick={() => setActiveStep(4)}
                                className={`w-[48px] h-[48px] mb-2 rounded-lg text-white font-bold text-[20px] transition duration-200 shadow
                    ${activeStep === 4 ? 'bg-[#0E2B56]' : 'bg-[#AFD6E7] hover:bg-[#0E2B56]'}`}
                            >
                                4
                            </button>
                            <span className="text-[16px] text-center text-[#CFE5F0]">
                                Documents
                            </span>
                        </div>

                        {/* 8th column */}
                        <div className="w-[50px] h-[180px] flex items-center justify-center text-xl">
                            <img src={line} />
                        </div>

                        {/* 9th column */}
                        <div className="w-[190px] h-[180px] flex flex-col items-center justify-center text-3xl">
                            <button
                                onClick={() => setActiveStep(5)}
                                className={`w-[48px] h-[48px] mb-2 rounded-lg text-white font-bold text-[20px] transition duration-200 shadow
                    ${activeStep === 5 ? 'bg-[#0E2B56]' : 'bg-[#AFD6E7] hover:bg-[#0E2B56]'}`}
                            >
                                5
                            </button>
                            <span className="text-[16px] text-center text-[#CFE5F0]">
                                Account Details
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 overflow-y-auto px-6 py-2 max-h-[calc(100vh-180px)] scrollbar-hidden">

                    {/* Form Section */}

                    {/* Institute Details */}
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 mb-5">
                        <h2 className="text-lg font-semibold mb-4 text-left">Enter Your Institute Details Here</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1 text-left">Institute Name</label>
                                <input type="text" className="w-full p-2 rounded bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left">Registered Date</label>
                                <input type="" className="w-full p-2 rounded bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm mb-1 text-left">Description</label>
                                <textarea className="w-full p-2 rounded bg-white/20 text-black border border-[#4771AE] outline-none" rows={3}></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Address Info */}
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-black/20 mb-5">
                        <h2 className="text-lg font-semibold mb-4 text-left">Enter Your Address Information Here</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Address Line 1</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Address Line 2</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Phone Number</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">All Phone Number</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Counter</label>
                                <select className="border border-[#4771AE] bg-white/20 rounded-lg px-4 py-2 min-h-[40px] w-full">
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">State</label>
                                <select className="border border-[#4771AE] bg-white/20 rounded-lg px-4 py-2 min-h-[40px] w-full">
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">City</label>
                                <select className="border border-[#4771AE] bg-white/20 rounded-lg px-4 py-2 min-h-[40px] w-full">
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Pincode</label>
                                <select className="border border-[#4771AE] bg-white/20 rounded-lg px-4 py-2 min-h-[40px] w-full">
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 mb-5">
                        <h2 className="text-lg font-semibold mb-4 text-left">Enter Your Contact Detail Here</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Official Email</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Oficial Website</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>

                        </div>
                    </div>

                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 mb-5">
                        <h2 className="text-lg font-semibold mb-4 text-left">Enter Your Subscription Information Here</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1 text-left text-left">Subscription</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white/20 text-black border border-[#4771AE] outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Section */}
                <div className="flex justify-between items-center flex-col md:flex-row mb-5 ml-5 mr-5">
                    {/* Filter Button */}
                    <button onClick={() => navigate("/ins")}
                        className="flex items-center bg-[#FFFFFF] text-[#0E2B56] px-4 py-2 rounded-lg mb-4 md:mb-0 min-h-[48px] min-w-[105px] text-[16px]">
                        <span className="flex items-center ml-4">
                            Back
                        </span>
                    </button>

                    {/* Add User Button */}
                    <button
                        className="bg-[#0E2B56] text-white px-4 py-2 rounded-lg min-h-[48px] min-w-[105px] text-[16px]">
                        <span className="flex items-center ml-4">
                            Next
                        </span>
                    </button>
                </div>




            </div >
        </div>
    );
};

export default AddInstitute;
