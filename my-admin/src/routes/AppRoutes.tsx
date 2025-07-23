import { BrowserRouter , Routes ,  Route, Navigate} from "react-router-dom";

// import React from 'react'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
