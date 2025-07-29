// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import pro from "../../Assets/pro.png";
// import tickIcon from "../../Assets/tickIcon.png";
// import bgImage from "../../Assets/bgImage.jpg";

// const PlanForm: React.FC = () => {
//   const navigate = useNavigate();
//   const [profileImg, setProfileImg] = useState<string>(pro);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImg(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert("Please upload a valid image file (PNG or JPEG)");
//     }
//   };

//   const handleSubmit = () => {
//     const newWindow = window.open("", "_blank", "width=full,height=600");
//     if (newWindow) {
//       newWindow.document.write(`
//         <html>
//           <head>
//             <title>Submission Success</title>
//             <style>
//               * { margin: 0; padding: 0; box-sizing: border-box; }
//               body {
//                 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//                 height: 100vh;
//                 width: 100vw;
//                 background: linear-gradient(135deg, #6392BD, #A7C7E7);
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//               }
//               .glass-container {
//                 background: rgba(255, 255, 255, 0.15);
//                 backdrop-filter: blur(15px);
//                 border-radius: 20px;
//                 padding: 40px 60px;
//                 box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
//                 text-align: center;
//               }
//               .glass-container h1 {
//                 color: #ffffff;
//                 font-size: 26px;
//                 text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
//               }
//               .back-button {
//                 background-color: #0C2D57;
//                 color: white;
//                 padding: 10px 15px;
//                 border: none;
//                 border-radius: 8px;
//                 font-size: 14px;
//                 font-weight: 600;
//                 cursor: pointer;
//               }
//               .back-button:hover {
//                 background-color: #092240;
//               }
//             </style>
//           </head>
//           <body>
//             <div class="glass-container">
//               <h1>Form submitted successfully!</h1>
//               <button class="back-button" onclick="window.close()">Back</button>
//             </div>
//           </body>
//         </html>
//       `);
//       newWindow.document.close();
//     }
//   };

//   return (
//     <div className="min-h-screen w-auto flex items-center justify-center p-6 bg-transparent">
//       <div className="relative w-full  rounded-2xl  bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />
        
//         <div className="relative z-10 p-8 text-white">
//           <h3 className="text-lg text-left font-semibold mb-6 text-[#0C2D57]">
//             Enter Your Institute Details Here
//           </h3>

//           {/* Profile Upload */}
//           <div className="flex flex-col items-center mb-8">
//             <img
//               src={profileImg}
//               alt="Profile"
//               className="w-32 h-32 rounded-md bg-white object-cover"
//             />
//             <label className="mt-3 font-semibold text-[#0C2D57] cursor-pointer">
//               Upload Profile Picture
//               <input
//                 type="file"
//                 accept="image/png, image/jpeg"
//                 onChange={handleImageUpload}
//                 className="hidden"
//               />
//             </label>
//             <p className="text-sm text-[#0C2D57]">PNG or JPEG (Max 800K)</p>
//           </div>

//           {/* Plan Inputs */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {["Plan Name", "Plan Price", "Support Level"].map((field, idx) => (
//               <div key={idx}>
//                 <label className="text-sm font-medium mb-1 block text-left text-[#0C2D57]">
//                   {field}
//                 </label>
//                 <input className="input-style" />
//               </div>
//             ))}
//           </div>

//           {/* Description */}
//           <div className="mb-6">
//             <label className="text-sm font-medium mb-1 block text-left text-[#0C2D57]">
//               Plan Description
//             </label>
//             <textarea className="input-style h-20" />
//           </div>

//           {/* Feature Inputs */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-[#0C2D57]">
//             {[
//               "Duration",
//               "Duration Type",
//               "Number of Students",
//               "Number of Admins",
//               "Number of Teachers",
//               "Number of Batches",
//               "Number of Courses",
//               "Number of Classes",
//             ].map((label, index) => (
//               <div key={index}>
//                 <label className="text-sm font-medium mb-1 block text-left">
//                   {label}
//                 </label>
//                 <input className="input-style mb-2" />
//                 {label.includes("Number") && (
//                   <label className="flex items-center gap-2 text-sm mt-1">
//                     <span className="relative inline-block w-5 h-5">
//                       <input
//                         type="checkbox"
//                         className="absolute w-5 h-5 opacity-0 cursor-pointer z-10"
//                       />
//                       <span className="w-5 h-5 border border-[#0C2D57] rounded-sm bg-white/30 block"></span>
//                       <img
//                         src={tickIcon}
//                         alt="tick"
//                         className="absolute top-0 left-0 w-5 h-5 opacity-0 pointer-events-none transition-opacity duration-200"
//                       />
//                     </span>
//                     Check for Unlimited {label.split(" ")[2]}
//                   </label>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between">
//             <button
//               className="bg-[#0C2D57] text-white px-6 py-2 rounded-md"
//               onClick={() => navigate(-1)}
//             >
//               Cancel
//             </button>
//             <button
//               className="bg-[#0C2D57] text-white px-6 py-2 rounded-md"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>

//         {/* Checkbox tick visible logic */}
//         <style>{`
//           input[type="checkbox"]:checked + span + img {
//             opacity: 1;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default PlanForm;
