import React from "react";
import univerlogo from "../assets/About/univerlogo.png";

import img1 from "../assets/About/galleryimg1.png";
import img2 from "../assets/About/galleryimg2.png";
import img3 from "../assets/About/galleryimg3.png";
import img4 from "../assets/About/galleryimg1.png";

const galleryImages = [img1, img2, img3, img4];

const LogoAndGallery: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* Logo */}
            <div className="pl-6 w-full md:w-1/3">
                <h2 className="text-lg font-semibold mb-2 text-[#0E2B56] pb-2 ">
                    Logo
                </h2>
                <div className="w-[190px] h-[190px] bg-white/20  ml-0 border border-white/20 rounded-xl" >
                    <img
                        src={univerlogo}
                        alt="University Logo"
                        className="w-820 h-40 pt-4 object-contain" />
                </div>
            </div>

            {/* Gallery */}
            <div className="w-full md:w-[450px]">
                <h2 className="text-lg font-semibold mb-2 text-[#0E2B56] pb-2">
                    Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {galleryImages.map((imgSrc, i) => (
                        <div
                            key={i}
                            className="w-52 h-34 bg-white/20 flex items-center justify-center overflow-hidden border border-white/20 rounded-xl"
                        >
                            <img
                                src={imgSrc}
                                alt={`Gallery ${i + 1}`}
                                className="w-[180px] h-[110px] object-cover rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoAndGallery;
