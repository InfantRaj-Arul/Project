import React, { useState } from 'react';
import bg1 from '../assets/Rec1.png';
import bg2 from '../assets/Rec2.png';
import bg3 from '../assets/Rec3.png';
import bg4 from '../assets/containerimg.png';
import icon from '../assets/cardicon.png';
import icon1 from '../assets/icons1.png';
import icon2 from '../assets/icons2.png';
import icon3 from '../assets/icons3.png';
import icon4 from '../assets/icons4.png';
import map from '../assets/mapicon.png';
import graph from '../assets/graphicon.png';
import bicon from '../assets/Filter.png';
import bicon1 from '../assets/Plusimg.png';
import backimg from '../assets/bgimg.png';
import { useNavigate } from "react-router-dom";
type Institute = {
  name: string;
  address: string;
  branches: string;
  plan: string;
  imageUrl: string;
};


const institutes: Institute[] = [
  {
    name: "Bharathidasan University",
    address: "National Highway 336",
    branches: "Branches",
    plan: "Plan",
    imageUrl: icon1,
  },
  {
    name: "Anna University Ro Tirunelveli",
    address: "No 3, Salman Complex",
    branches: "Branches",
    plan: "Plan",
    imageUrl: icon2,
  },
  {
    name: "Remo International College",
    address: "10 GST Road, St, Thomas Roa",
    branches: "Branches",
    plan: "Basic Plan - Free Plan",
    imageUrl: icon3,
  },
  {
    name: "First Fly Aviation Academy",
    address: "3rd Floor, Chandra Towers, No.",
    branches: "Branches",
    plan: "Premium Plan",
    imageUrl: icon4,
  },
];

const cards = [
  {
    title: "Total Institute",
    image: bg1, 
  },
  {
    title: "Active Institute",
    image: bg2,
  },
  {
    title: "Blocked Institute",
    image: bg3,
  },
];

const filtercards = [
  {
    title: "Subscription Plan",
  },
  {
    title: "Status",
  },
  {
    title: "Date",
  },
];

const Institutepage: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const navigate = useNavigate()

  return (
    <div className="min-h-screen px-6 py-4" style={{
      backgroundImage: `url(${bg4})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Header Section */}
      <div className="flex justify-between items-center flex-col md:flex-row">
        {/* Filter Button */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center bg-[#FFFFFF] text-[#0E2B56] px-4 py-2 rounded-lg mb-4 md:mb-0 min-h-[48px] min-w-[105px] text-[16px]"
        >
          <img src={bicon} alt="filter icon" className="mr-2 w-[24px] h-[24px] font-Montserrat"/>
          <span className="text-[16px]" >
            {showFilter ? 'Hide' : 'Show Filter'}
          </span>
        </button>

        {/* Add User Button */}
        <button
          onClick={() =>navigate("/institute")
            // setShowModal(true);
            // setMenuOpenIndex(null);
          }
          className="bg-[#0E2B56] text-white px-4 py-2 rounded-lg min-h-[48px] min-w-[105px] text-[16px]"
        >
          <span className="flex items-center font-Montserrat">
            <img src={bicon1} alt="plus icon" className="mr-2" />
            Add Institute
          </span>
        </button>
      </div>

      {/* Show and Hide Filters Section ----------------------------> Start */}
      {showFilter && (
        <>
          {/* Filter Container */}
          <div className="mb-6 text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mb-6 mt-5">

              {/* Box1............. */}
                <div className="w-[370px] h-[120px] p-4 gap-4 flex flex-row items-start bg-[rgba(200,246,255,0.5)] shadow-inner backdrop-blur-[76px] rounded-[16px] box-border">
                  <div className="w-[368px] h-[86px] flex flex-col items-start gap-4">
                    {/* Title */}
                    <div className="w-[368px] h-[22px] flex flex-col justify-center items-start gap-4">
                      <div className="text-[#0E2B56] font-montserrat font-semibold text-[18px] leading-[22px] tracking-[-0.02em]">
                        Subscription Plan
                      </div>
                    </div>
                    {/* Button */}
                    <div className="flex flex-col w-[338px] h-[48px] flex flex-row" >
                      <select className="border border-[#4771AE] rounded-lg px-4 py-2 min-h-[40px] w-full">
                      </select>
                    </div>
                  </div>
                </div>

                {/* Box2............. */}
                <div className="w-[370px] h-[120px] p-4 gap-4 flex flex-row items-start bg-[rgba(200,246,255,0.5)] shadow-inner backdrop-blur-[76px] rounded-[16px] box-border">
                  <div className="w-[368px] h-[86px] flex flex-col items-start gap-4">
                    {/* Title */}
                    <div className="w-[368px] h-[22px] flex flex-col justify-center items-start gap-4">
                      <div className="text-[#0E2B56] font-montserrat font-semibold text-[18px] leading-[22px] tracking-[-0.02em]">
                        Status
                      </div>
                    </div>
                    {/* Button */}
                    <div className="flex flex-col w-[338px] h-[48px] flex flex-row" >
                      <select className="border border-[#4771AE] rounded-lg px-4 py-2 min-h-[40px] w-full">
                      </select>
                    </div>
                  </div>
                </div>

                {/* Box3............. */}
                <div className="w-[370px] h-[120px] p-4 gap-4 flex flex-row items-start bg-[rgba(200,246,255,0.5)] shadow-inner backdrop-blur-[76px] rounded-[16px] box-border">
                  <div className="w-[368px] h-[86px] flex flex-col items-start gap-4">
                    {/* Title */}
                    <div className="w-[368px] h-[22px] flex flex-col justify-center items-start gap-4">
                      <div className="text-[#0E2B56] font-montserrat font-semibold text-[18px] leading-[22px] tracking-[-0.02em]">
                        Date
                      </div>
                    </div>
                    {/* Button */}
                    <div className="flex flex-col w-[338px] h-[48px] flex flex-row" >
                      <select className="border border-[##4771AE] rounded-lg px-4 py-2 min-h-[40px] w-full">
                      </select>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </>
      )}
      {/* Show and Hide Filters Section ----------------------------> End */}


{/* <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-900 font-montserrat p-6 text-white">
      {showModal && (
        <div className="flex justify-center items-center h-full">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#0E2B56] text-white px-4 py-2 rounded-lg min-h-[48px] min-w-[140px] text-[16px]"
          >
            <span className="flex items-center justify-center">
              <img src={bicon1} alt="plus icon" className="mr-2 w-5 h-5" />
              Add Salaries
            </span>
          </button>
        </div>
      )}
    
    </div>

  return (
    <div className="space-y-10">
      {/* Step Progress Bar */}
      {/* <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 mb-10">
        {["Personal Info", "Gallery Info", "Social Links", "Documents", "Account Details"].map((step, idx) => (
          <div key={step} className="flex-1 text-center relative">
            <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${idx === 0 ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-800'}`}>
              {idx + 1}
            </div>
            <p className="mt-2 text-sm">{step}</p>
            {idx < 4 && <div className="absolute top-5 right-0 w-full h-px bg-blue-200 z-[-1]"></div>}
          </div>
        ))}
      </div>

    //   {/* Form Section */}
    {/* //   <div className="space-y-10"> */}
        {/* Institute Details */}
    {/* //     <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"> */}
    {/* //       <h2 className="text-lg font-semibold mb-4">Enter Your Institute Details Here</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
    {/* //         <div>
    //           <label className="block text-sm mb-1">Institute Name</label>
    //           <input type="text" className="w-full p-2 rounded bg-white/20 text-white border border-white/30 outline-none" />
    //         </div>
    //         <div> */}
    {/* //           <label className="block text-sm mb-1">Registered Date</label>
    //           <input type="date" className="w-full p-2 rounded bg-white/20 text-white border border-white/30 outline-none" />
    //         </div> */}
    {/* //         <div className="col-span-1 md:col-span-2">
    //           <label className="block text-sm mb-1">Description</label>
    //           <textarea className="w-full p-2 rounded bg-white/20 text-white border border-white/30 outline-none" rows={3}></textarea>
    //         </div>
    //       </div> */}
    {/* //     </div> */}

         {/* Address Info */}
    {/* //     <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
    //       <h2 className="text-lg font-semibold mb-4">Enter Your Address Information Here</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div> */}
    {/* //           <label className="block text-sm mb-1">Address Line 1</label>
    //           <input type="text" className="w-full p-2 rounded bg-white/20 text-white border border-white/30 outline-none" />
    //         </div> */}
    {/* //         <div>
    //           <label className="block text-sm mb-1">Address Line 2</label>
    //           <input type="text" className="w-full p-2 rounded bg-white/20 text-white border border-white/30 outline-none" />
    //         </div>
    //       </div> */}
    {/* //     </div> */}
    {/* //   </div> */}
    {/* // </div> */}
  





      {/* Summary Cards */}
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-25 mb-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative text-center text-gray-800 overflow-hidden rounded-lg"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '129px',
                width: '286px',
              }}
            >
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                {/* Top-left: Icon and Title side by side */}
                <div className="flex items-center space-x-2">
                  <img src={icon} alt="icon" className="w-[44px] h-[44px]" />
                  <div className="text-sm font-semibold">{card.title}</div>
                </div>

                {/* Bottom Right: Number */}
                <div className="text-2xl font-bold text-left mt-auto">{0}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institute Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {institutes.map((institute, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-lg rounded-[16px] p-4 shadow text-gray-800 flex flex-col justify-between h-full"
          >
            <div className="flex items-start gap-3">
              <img
                src={institute.imageUrl}
                alt={institute.name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <h3 className="text-base font-semibold leading-tight line-clamp-2 mt-3">
                {institute.name}
              </h3>
            </div>

            <div className="mt-3 text-sm flex items-start gap-2 text-gray-600">
              <img className="w-[24px] h-[24px]" src={map} /> <span>{institute.address}</span>
            </div>

            <div className="mt-3 text-sm flex items-start gap-2 text-gray-600"><img className="w-[24px] h-[24px]" src={graph} /> {institute.branches}</div>



            <div className="mt-auto flex items-end justify-between px-4 py-2">
              <div className="text-sm font-medium">{institute.plan}</div>
              <button className="bg-green-600 text-white text-sm px-4 py-1.5 rounded-md">
                View
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutepage;


