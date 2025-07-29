// MainLayout.tsx
"use client";

import { Target, Bell } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

interface NavIcon {
  src: string;
  alt: string;
  id: string;
  path: string;
}

const MainLayout: React.FC = () => {
  const location = useLocation();

  const navIcons: NavIcon[] = [
    { src: "/icons/Group 163.png", alt: "Dashboard", id: "dashboard", path: "/dashboard" },
    { src: "/icons/insi.png", alt: "Users", id: "users", path: "/ins" },
    { src: "/icons/pay.png", alt: "Calendar", id: "calendar", path: "/pay" },
    { src: "/icons/subs.png", alt: "Time", id: "time", path: "/subs" },
    { src: "/icons/noti.png", alt: "Payment", id: "payment", path: "/noti" },
    { src: "/icons/abt.png", alt: "Business", id: "business", path: "/abt" },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{
          background: "linear-gradient(135deg, #B8D4E3 0%, #A8C8D8 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          height: "80px",
        }}
      >
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
          </Link>
        </div>

        {/* Center - Navigation Icons */}
        <div className="flex items-center gap-6">
          {navIcons.map((icon) => (
            <Link 
              key={icon.id}
              to={icon.path}
              className="group w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all hover:bg-white/20"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <img 
                  src={icon.src} 
                  alt={icon.alt} 
                  className="relative z-10 w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Right side - Notification and Profile */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#4A5BF7] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all border-2 border-white/50">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/default-profile.jpg";
              }}
            />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="fixed inset-0 overflow-y-auto px-10 py-8 w-full min-h-screen pt-25 ">
        <div className="max-w-9xl w-full mx-auto rounded-lg">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;