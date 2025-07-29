"use client"

import { Building2, CreditCard, Users, Ticket, Filter, Bell, Target } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useState } from "react"

const DashboardStats = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  const statsData = [
    {
      title: "Total Institute",
      value: "0",
      icon: Building2,
    },
    {
      title: "Institute Subscriptions",
      value: "0",
      icon: CreditCard,
    },
    {
      title: "Active Subscriptions",
      value: "0",
      icon: Users,
    },
    {
      title: "New Support Tickets",
      value: "0",
      icon: Ticket,
    },
  ]

  // Sample data for the revenue chart
  const revenueData = [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 6000 },
    { month: "Mar", value: 8000 },
    { month: "Apr", value: 12000 },
    { month: "May", value: 9000 },
    { month: "Jun", value: 7000 },
  ]

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i)

  const StatCard = ({ title, value, icon: Icon }) => {
    return (
      <div
        className="relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-lg"
        style={{
          width: "300px",
          height: "149px",
          backgroundImage: "url('/rectangle.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: "pointer",
        }}
      >
        <div className="flex items-center gap-3 z-10 relative">
          <div className="w-8 h-8 bg-white/80 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white">
            <Icon className="w-4 h-4 text-slate-700 transition-all duration-300 group-hover:text-blue-600" />
          </div>
          <span 
            className="text-slate-700 transition-all duration-300 group-hover:text-blue-800"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </span>
        </div>
        <div className="text-slate-800 text-3xl font-bold z-10 relative transition-all duration-300 group-hover:text-blue-900">
          {value}
        </div>
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 hover:opacity-100 rounded-2xl transition-all duration-300"></div>
      </div>
    )
  }

  const FilterPanel = () => {
    return (
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          showFilter ? "max-h-32 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-row items-center gap-[30px] w-[1321px] h-[120px]">
          {/* Month Filter */}
          <div
            className="flex flex-col items-start p-[16px] gap-[16px] w-[645px] h-[120px] rounded-[16px]"
            style={{
              background: "rgba(200, 246, 255, 0.5)",
              boxShadow: "inset 0px 4px 122px rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(76px)",
            }}
          >
            <div className="flex flex-col items-start gap-[16px] w-[591px] h-[86px]">
              <div className="flex flex-col justify-center items-start gap-[16px] w-[591px] h-[22px]">
                <span
                  className="text-[#0E2B56]"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Month
                </span>
              </div>
              <div className="relative w-[591px] h-[48px]">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="appearance-none w-full h-full rounded-[12px] border border-[#4771AE] bg-white/80 text-slate-700 px-4 pr-10 text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4771AE]"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                  }}
                >
                  <option value="" disabled>
                    Select Month
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#4771AE]">
                  <svg
                    className={`transform transition-transform ${showFilter ? "rotate-90" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Year Filter */}
          <div
            className="flex flex-col items-start p-[16px] gap-[16px] w-[645px] h-[120px] rounded-[16px]"
            style={{
              background: "rgba(200, 246, 255, 0.5)",
              boxShadow: "inset 0px 4px 122px rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(76px)",
            }}
          >
            <div className="flex flex-col items-start gap-[16px] w-[591px] h-[86px]">
              <div className="flex flex-col justify-center items-start gap-[16px] w-[591px] h-[22px]">
                <span
                  className="text-[#0E2B56]"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "22px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Year
                </span>
              </div>
              <div className="relative w-[591px] h-[48px]">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none w-full h-full rounded-[12px] border border-[#4771AE] bg-white/80 text-slate-700 px-4 pr-10 text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4771AE]"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                  }}
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#4771AE]">
                  <svg
                    className={`transform transition-transform ${showFilter ? "rotate-90" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full ">
      {/* Main Content - Centered Container */}
      <div className="fixed top-28 bottom-0 left-0 right-0 flex justify-center items-start ">
        {/* Main Container */}
        <div
          className="relative rounded-xl border border-white/30"
          style={{
            width: "1380px",
            height: "calc(100vh - 120px)",
            background: "rgba(200, 246, 255, 0.5)",
            boxShadow: "inset 0px 4px 122px rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(76px)",
          }}
        >
          <div className="w-full h-full p-8">
            {/* Header - Show Filter Button */}
            <div className="flex justify-start mb-8">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className={`flex items-center justify-center px-6 py-3 gap-3 backdrop-blur-sm rounded-xl shadow-lg transition-all ${
                  showFilter
                    ? "bg-blue-500/80 text-white hover:bg-blue-600/80"
                    : "bg-white/80 text-slate-700 hover:bg-white/90"
                }`}
              >
                <Filter className="w-5 h-5" />
                <span 
                  className="font-semibold"
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                  }}
                >
                  {showFilter ? "Hide Filter" : "Show Filter"}
                </span>
              </button>
            </div>

            {/* Filter Panel */}
            <FilterPanel />

            {/* Stats Cards Container */}
            <div className="flex justify-center mb-12">
              <div className="flex justify-between items-center w-full max-w-[1320px] gap-[31px]">
                {statsData.map((stat, index) => (
                  <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
                ))}
              </div>
            </div>

            {/* Graphs & Trends Section */}
            <div>
              <h2 
                className="text-slate-800 mb-6"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "24px",
                }}
              >
                Graphs & Trends
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Trends Chart */}
                <div
                  className="p-6 rounded-2xl border border-white/30 backdrop-blur-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0px 4px 122px rgba(255, 255, 255, 0.3)",
                    height: "400px",
                  }}
                >
                  <h3 
                    className="text-slate-800 mb-4"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    Revenue Trends (Monthly)
                  </h3>
                  <div className="h-[calc(100%-40px)] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#475569", fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#475569", fontSize: 12 }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Subscription Details */}
                <div
                  className="p-6 rounded-2xl border border-white/30 backdrop-blur-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0px 4px 122px rgba(255, 255, 255, 0.3)",
                    height: "400px",
                  }}
                >
                  <h3 
                    className="text-slate-800 mb-4"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    Subscription Details
                  </h3>
                  <div className="h-[calc(100%-40px)] w-full bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-slate-600 text-lg mb-2">Subscription Overview</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-100/50 p-4 rounded-lg">
                          <div className="text-blue-800 font-bold text-xl">1,234</div>
                          <div className="text-slate-600 text-sm">Active Subscriptions</div>
                        </div>
                      
                        <div className="bg-purple-100/50 p-4 rounded-lg">
                          <div className="text-purple-800 font-bold text-xl">89%</div>
                          <div className="text-slate-600 text-sm">Renewal Rate</div>
                        </div>
                        <div className="bg-amber-100/50 p-4 rounded-lg">
                          <div className="text-amber-800 font-bold text-xl">56</div>
                          <div className="text-slate-600 text-sm">New This Month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardStats