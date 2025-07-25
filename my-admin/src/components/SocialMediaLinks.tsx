// src/components/SocialMediaLinks.tsx
import React from "react";

const SocialMediaLinks: React.FC = () => {
  const links = [
    { label: "www.facebook.com" },
    { label: "www.linkdn.com" },
    { label: "www.instagram.com" },
    { label: "www.X.commm" },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md border border-white/20 rounded-xl">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#0E2B56] rounded-md" />
          <span className="text-blue-800 font-medium">{link.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
