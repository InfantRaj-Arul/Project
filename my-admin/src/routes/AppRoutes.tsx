import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/Navbar";
import Maindash from "../pages/Maindash/Maindash";
import Institute from "../pages/Institute/Institute";
import Payment from "../pages/Payment/Payment";
import Subscription from "../pages/Subscription/subscription";
import About from "../pages/About/About";
import { Notification } from "../pages/Notification/Notifications";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Maindash />} />
          <Route path="/" element={<div className="pt-28"></div>} />
          <Route path="/ins" element={<Institute />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/subs" element={<Subscription />} />
          <Route path="/dashboard" element={<About />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/abt" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;