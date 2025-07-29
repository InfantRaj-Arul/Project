import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/Navbar";
import Dashboard from "../pages/Maindash/Maindash"; // Assuming this is your dashboard component
import Institute from "../pages/Institute/Institute";
import Payment from "../pages/Payment/Payment";
import Subscription from "../pages/Subscription/subscription";
import About from "../pages/About/About";
import ProfilePage from "../pages/About/ProfilePage";
import EditProfile from "../pages/About/EditProfileInfo";
import CoursesPage from "../components/CoursesView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard as home page */}
          <Route path="/ins" element={<Institute />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/subs" element={<Subscription/>} />
          <Route path="/abt" element={<About />} />
                  {/* <Route path="/" element={<Navigate to="/abt" replace />} /> */}
        {/* <Route path="/institute/about" element={<About />} /> */}
        <Route path="/institute/profile" element={<ProfilePage />} />
        <Route path="/edit-institute" element={<EditProfile/>} />
        <Route path="/institute/courses" element={<CoursesPage />} />

          <Route path="/noti" element={<div>Notifications Page</div>} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;