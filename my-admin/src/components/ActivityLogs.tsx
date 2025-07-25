import React from "react";

const logs = [
    {
        type: "Notes Created",
        description: "JhgfdsA - Notes Created",
        date: "July 17, 2025",
        time: "06:13:23 PM",
    },
    {
        type: "Notes Created",
        description: "JhgfdsA - Notes Created",
        date: "July 17, 2025",
        time: "06:13:23 PM",
    },
];

const ActivityLogs: React.FC = () => {
    return (
        <div className="bg-white/20 backdrop-blur-md shadow-xl p-6 w-full h-93 border border-white/20 rounded-xl ">
            <div className="flex flex-col gap-10">
                <div className="relative pl-12 pt-19">
                    <div className="absolute left-7 top-8 h-[250px] flex flex-col items-center z-10">
                        <div className="w-3 h-3 bg-green-500 rounded-full mb-1" />
                        <div className="w-px flex-1 bg-green-500" />
                    </div>

                    {/* Label */}
                    <div className="absolute -left-1 top-0 z-20">
                        <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                            {logs[0].type}
                        </span>
                    </div>

                    {/* Inner Card */}
                    <div className="ml-13 mt-6 bg-white/10 backdrop-blur-md rounded-xl p-4  h-32 text-white shadow-md">
                        <h3 className="text-sm font-semibold mb-1 text-[#0E2B56]">Note</h3>
                        <p className="text-xs  mb-1 text-[#0E2B56] mt-8">Create</p>
                        <div className="flex justify-between text-xs text-white/60">
                            <span className="font-medium text-[#0E2B56]">{logs[0].description}</span>
                            <span className="text-[#0E2B56]">{`${logs[0].date} At ${logs[0].time}`}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="bg-green-500 text-white text-xs font-semibold pl-3 pt-1 mt-6 w-26 h-6 rounded-md shadow">Notes Created</h2>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogs;
