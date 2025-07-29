import React from "react";
import univerlogo from "../assets/About/univerlogo.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import profileicon from "../assets/About/profileicon.png";
import abouticon from "../assets/About/abouticon.png";
import courseicon from "../assets/About/courseicon.png"

const tabs = [
    { name: "About", path: "/abt", icon: abouticon },
    { name: "Profile", path: "/institute/profile", icon: profileicon },
    { name: "Courses", path: "/institute/courses", icon: courseicon },
];

const AboutView: React.FC = () => {
    return (
        <>
            {/* Top Tab Buttons */}
            <div className="flex gap-4 mb-4">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md transition-all duration-200 ${isActive
                                ? "bg-[#0E2B56] text-white shadow border-[#0E2B56]"
                                : "bg-white/40 text-[#0B2447] border-[#0E2B56]"
                            }`
                        }
                    >
                        <div className="flex items-center gap-2">
                            <img src={tab.icon} alt={tab.name} className="w-4 h-4" />
                            <span>{tab.name}</span>
                        </div>
                        
                    </NavLink>
                ))}
            </div>

            {/* Contact Details Box */}
            <div className="p-6 w-[705px] h-[215px] rounded-xl shadow-lg border border-white/20 flex flex-col md:flex-row items-start gap-6 bg-[rgba(255,255,255,0.1)] backdrop-blur-md text-black mb-2">
                <div className="flex flex-col items-center min-w-[170px]">
                    <img src={univerlogo} alt="Logo" className="w-29 h-29 object-contain" />
                    <p className="mt-2 font-medium text-[#0B2447] text-center font-montserrat text-[14px]">
                        Bharathidasan University
                    </p>
                    <p className="text-sm text-gray-700 text-center">aureg@bdu.ac.in</p>
                </div>

                <div className="text-sm w-full text-left">
                    <h2 className="flex text-[#0E2B56] items-center gap-2 text-base font-semibold mb-3 font-montserrat">
                        Contact Details:
                    </h2>
                    <p className="flex items-center gap-2 mb-2 text-[#0E2B56]">
                        <MapPin size={14} /> Palkalaiperur, Tiruchirappalli, 620024, Tamil Nadu
                    </p>
                    <p className="flex items-center gap-2 mb-2 text-[#0E2B56]">
                        <Mail size={14} /> aureg@bdu.ac.in
                    </p>
                    <p className="flex items-center gap-2 mb-2 text-[#0E2B56]">
                        <Phone size={14} /> 914312407092
                    </p>
                </div>
            </div>

            {/* About Description */}
            <div className=" text-left mt-0 w-269">
                <h3 className="text-base font-bold text-white">About Us</h3>
                <p className="text-sm leading-relaxed text-white">
                    Bharathidasan University established in February 1982, and was named after the great revolutionary Tamil Poet,
                    Bharathidasan (1891–1964). The motto of the University “We will create a brave new world” has been framed
                    from Bharathidasan’s poetic words "புதியதோர் உலகம் செய்வோம்". The University endeavours to be true to such
                    a vision by creating in the region a brave new world of academic innovation for social change.
                </p>
            </div>
        </>
    );
};

export default AboutView;
