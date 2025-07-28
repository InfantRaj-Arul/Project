<<<<<<< HEAD
import { BrowserRouter , Routes ,  Route, } from "react-router-dom";
import FeesTable from "../Components/FeesTable";

import '../index.css'
import SubsCriptionPlan from "../Components/SubsCription/SubsCriptionPlan";
import PlanForm from "../Components/Plan/PlanForm";


// import React from 'react'
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/Navbar";
import Dashboard from "../pages/Maindash/Maindash"; // Assuming this is your dashboard component
import Institute from "../pages/Institute/Institute";
import Payment from "../pages/Payment/Payment";
import Subscription from "../pages/Subscription/subscription";
import About from "../pages/About/About";
>>>>>>> 1918fa1b612cf3d89373446f25e93b1ecd1629f6

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
         <Route path="/" element={<FeesTable />} />
         <Route path="/sup" element={<SubsCriptionPlan/>} />
         <Route path="/add-institute" element={<PlanForm/>} />

         {/* <Route path="/dashboard" element={<div>Dashboard</div>} />
         <Route path="/settings" element={<div>Settings</div>} />
         <Route path="/profile" element={<div>Profile</div>} />
         <Route path="*" element={<div>404 Not Found</div>} />  */}
=======
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard as home page */}
          <Route path="/ins" element={<Institute />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/subs" element={<Subscription/>} />
          <Route path="/abt" element={<About />} />
          <Route path="/noti" element={<div>Notifications Page</div>} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Route>
>>>>>>> 1918fa1b612cf3d89373446f25e93b1ecd1629f6
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;