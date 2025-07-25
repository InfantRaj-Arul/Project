// import { BrowserRouter , Routes ,  Route, Navigate} from "react-router-dom";

// // import React from 'react'

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="/dashboard" element={<div>Dashboard</div>} />
//         <Route path="/settings" element={<div>Settings</div>} />
//         <Route path="/profile" element={<div>Profile</div>} />
//         <Route path="*" element={<div>404 Not Found</div>} /> */}
//        <Route path="categories" element={<institute />} />
//       </Routes>
//     </BrowserRouter>

//   )
// }

import { BrowserRouter , Routes ,  Route, Navigate} from "react-router-dom";
import Institutepage from "../institute/Institutepage";
import SalariesForm from "../institute/SalariesForm";
// import React from 'react'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        { <Route path="/" element={<Institutepage/>} /> }
        { <Route path="/institute" element={<SalariesForm/>} />}
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
