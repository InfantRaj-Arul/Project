import React from "react";
import univerlogo from "../assets/About/univerlogo.png"


const LogoAndGallery: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Logo Card */}
            <div className="pl-6 w-full md:w-1/3">
                <h2 className="text-lg font-semibold mb-4 text-[#0E2B56] pb-2 ml-25">
                    Logo
                </h2>
                <div className="w-[190px] h-[190px] bg-white/20 rounded-md ml-25" >
                <img
            src={univerlogo}
            alt="University Logo"
            className="w-820 h-40 pt-4 object-contain"/>
            </div>
            </div>

            {/* Gallery Card */}
            <div className="w-full md:w-[450px] ">
                <h2 className="text-lg font-semibold mb-4 text-[#0E2B56] pb-2">
                    Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((img, i) => (
                        <div key={i} className="w-full h-36 bg-white/20 rounded-md" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoAndGallery;
