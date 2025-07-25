import React, { useState } from "react";
import Sidebar from "./Sidebar";
import InstituteInfo from "./InstituteInfo";
import LogoAndGallery from "./LogoAndGallery";
import SocialMediaLinks from "./SocialMediaLinks";
import Documents from "./Documents";
import ChangePassword from "./ChangePassword";
import ActivityLogs from "./ActivityLogs";

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
                {activeTab === "Social Media" && <SocialMediaLinks />}
                {activeTab === "Documents" && <Documents />}
                {activeTab === "Change Password" && <ChangePassword />}
                {activeTab === "Institute Activity Logs" && <ActivityLogs />}
            </div>
        </div>
    );
};

export default ProfileView;
