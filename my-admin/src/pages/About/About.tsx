import React from "react";
import university from "../../assets/About/university.png";
// import backgroundImage from "../../assets/About/bg.png";
import bginsideImage from "../../assets/About/bg1.png";
import AboutView from "../../components/AboutView";

const About: React.FC = () => {
  return (
    // <div
    //   className="min-h-screen bg-cover bg-no-repeat bg-center p-5"
    //   style={{ backgroundImage: `url(${backgroundImage})` }}
    // >
      <div
        className="min-h-[99vh] bg-cover bg-no-repeat bg-center pt-5 px-5 rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${bginsideImage})` }}
      >
        {/* Header */}
        <div className="bg-[#0B2447] rounded-t-xl text-white flex items-center gap-2 px-4 py-4">
          <span className="text-xl font-bold">&lt;</span>
          <div className="w-7 h-7 bg-white rounded-full" />
          <h1 className="text-lg font-semibold ">Bharathidasan University</h1>
        </div>

        {/* Banner */}
        <img
          src={university}
          alt="University"
          className="w-full h-[240px] object-cover rounded-b-xl"
        />

        {/* About View */}
        <div className=" mt-3 max-w-5xl">
          <AboutView />
        </div>
      </div>
    // </div>
  );
};

export default About;