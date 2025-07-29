import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/Navbar";
import Dashboard from "../pages/Maindash/Maindash"; // Assuming this is your dashboard component
import Institute from "../pages/Institute/Institute";
import Payment from "../pages/Payment/Payment";
import Subscription from "../pages/Subscription/subscription";
import About from "../pages/About/About";
import AddInstitute from "../pages/Institute/AddInstitute";
import { Notification } from "../pages/Notification/Notifications";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard as home page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Also accessible via /dashboard */}
          <Route path="/ins" element={<Institute />} />
           <Route path="/addins" element={<AddInstitute />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/subs" element={<Subscription/>} />
          <Route path="/abt" element={<About />} />
          <Route path="/noti" element={<div>Notifications Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;