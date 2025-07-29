import React from "react";

interface TabButtonProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-md shadow ${
        active ? "bg-[#0B2447] text-white" : "bg-white text-[#0B2447]"
      }`}
      onClick={onClick}
    >
      <img src={icon} className="w-6" />
      {label}
    </button>
  );
};

export default TabButton;
