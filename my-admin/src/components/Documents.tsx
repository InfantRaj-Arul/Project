import React from "react";
import Personicon from "../assets/About/person.png"

const documents = [
  { title: "GST", label: "GST Document" },
  { title: "PAN", label: "PAN Document" },
  { title: "Institute License", label: "Lic Document" },
];

const Documents: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      {documents.map((doc, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-4 w-[418px] h-[100px] border border-white/20"
        >
          <div className="flex justify-between items-center text-sm font-semibold text-[#0E2B56]">
            <span>{doc.title}</span>
            <span className="text-xs text-[#0E2B56] font-normal">N/A</span>
          </div>

          <button className="mt-4 w-full py-2 bg-[#0E2B56] text-white rounded-md flex items-center justify-center gap-2">
            <img src={Personicon} className="w-4"/>
            {doc.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Documents;
