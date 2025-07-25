import { BrowserRouter , Routes ,  Route, } from "react-router-dom";
import FeesTable from "../Components/FeesTable";

import '../index.css'
import SubsCriptionPlan from "../Components/SubsCription/SubsCriptionPlan";
import PlanForm from "../Components/Plan/PlanForm";


// import React from 'react'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<FeesTable />} />
         <Route path="/sup" element={<SubsCriptionPlan/>} />
         <Route path="/add-institute" element={<PlanForm/>} />

         {/* <Route path="/dashboard" element={<div>Dashboard</div>} />
         <Route path="/settings" element={<div>Settings</div>} />
         <Route path="/profile" element={<div>Profile</div>} />
         <Route path="*" element={<div>404 Not Found</div>} />  */}
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
