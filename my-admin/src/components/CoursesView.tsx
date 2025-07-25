import React from "react";
import university from "../assets/About/university.png";
import backgroundImage from "../assets/About/bg.png";
import bginsideImage from "../assets/About/bg1.png";
import mernImg from "../assets/About/course.png";
const CoursesView: React.FC = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-no-repeat bg-center p-5"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="min-h-[95vh] bg-cover bg-no-repeat bg-center pt-5 px-5 rounded-2xl"
                style={{ backgroundImage: `url(${bginsideImage})` }}
            >
                <div className="w-full">
                    {/* Header */}
                    <div className="bg-[#0B2447] rounded-t-xl text-white flex items-center gap-2 px-6 py-4">
                        <span className="text-xl font-bold">&lt;</span>
                        <div className="w-7 h-7 bg-white rounded-full" />
                        <h1 className="text-lg font-semibold">Bharathidasan University</h1>
                    </div>

                    {/* Banner */}
                    <img
                        src={university}
                        alt="University"
                        className="w-full h-[260px] object-cover rounded-b-xl"
                    />

                    {/* <ProfileView /> */}
                    <div className="text-white mt-6">
                        <div className="bg-white/10 border border-white/40 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-md w-full max-w-sm">
                            {/* Top Image */}
                            <img
                                src={mernImg}
                                alt="MERN Stack"
                                className="rounded-xl w-full h-[130px] object-cover mb-4"
                            />

                            {/* Badge */}
                            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-lg font-montserrat inline-block mb-2">
                                Featured
                            </span>

                            {/* Title */}
                            <h2 className="text-base font-semibold text-[#0E2B56] mb-2 font-montserrat">MERN STACK</h2>

                            {/* Description */}
                            <p className="text-sm font-montserrat font-medium text-[14px] text-[#0E2B56] mb-4 leading-relaxed">
                                A MERN stack developer is responsible for front-end and back-end development, database management,
                                integration and deployment, bug fixing, and working with cross-functional teams.
                            </p>

                            {/* Bottom Row */}
                            <div className="flex justify-between text-xs text-[#0E2B56]">
                                <span>Modules</span>
                                <span>Duration: 30 days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesView;

