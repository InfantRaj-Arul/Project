import React, { useState } from "react";
import Sidebar from "./Sidebar";
import InstituteInfo from "./InstituteInfo";
import LogoAndGallery from "./LogoAndGallery";

const ProfileView: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Personal Info");

    return (
        <div className="flex flex-col xl:flex-row gap-6 text-sm text-white mt-6">
            {/* Sidebar */}
            <div className="w-full xl:max-w-[300px]">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Conditional Right Section */}
            <div className="flex-1">
                {activeTab === "Personal Info" && <InstituteInfo />}
                {activeTab === "Profile" && <LogoAndGallery />}
            </div>
        </div>
    );
};

export default ProfileView;
