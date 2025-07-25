import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfile from "../pages/EditProfileInfo";
import CoursesPage from "../components/CoursesView";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/institute/about" replace />} />
        <Route path="/institute/about" element={<AboutPage />} />
        <Route path="/institute/profile" element={<ProfilePage />} />
        <Route path="/edit-institute" element={<EditProfile/>} />
        <Route path="/institute/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
