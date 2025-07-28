import React from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  "Personal Info",
  "Profile",
  "Social Media",
  "Documents",
  "Change Password",
  "Institute Activity Logs",
];

const Sidebar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl pl-6 pr-6 pt-2 pb-2 border">
      <h2 className="text-lg font-semibold mb-4 text-[#0E2B56] border-b border-[#354D7157] pb-2">
        Settings
      </h2>
      <div className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-left px-4 py-2 rounded-md font-medium border transition-colors duration-200
              ${
                activeTab === tab
                  ? "bg-[#0E2B56] text-white border-[#0E2B56]"
                  : "text-[#0E2B56] border-[#0E2B56] hover:bg-[#0E2B56] hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
