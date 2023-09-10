// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import PrivateComponent from "./Components/Privatecomponent/PrivateComponent";
// import Home from "./Screen/Home/Home";
// import Dashboard from "./Screen/Dashboard/Dashboard";
// import Login from "./Components/Login/Login";
// import Error from "./Screen/Error/Error";
// import "./App.css";
// function App() {
//   const auth = localStorage.getItem("data");
//   return (
//     <div className="app">
//       <div>
//         <Routes>
//           <Route element={<PrivateComponent />}>
//             <Route path="/" element={<Sidebar />}>
//               <Route index element={<Dashboard />} />
//               <Route path="home" element={<Home />} />
//               <Route path="*" element={<Error />} />
//             </Route>
//           </Route>
//           <Route path="login" element={<Login />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import PrivateComponent from "./Components/Privatecomponent/PrivateComponent";
import Home from "./Screen/Home/Home";
import Dashboard from "./Screen/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Error from "./Screen/Error/Error";
import "./App.css";
import Teachers from "./Screen/Teachers/Teachers";
function App() {
  const auth = localStorage.getItem("data");
  return (
    <div>
      <Routes>
        {auth && (
          <Route
            path="/"
            element={<Navigate to="/sidebar/dashboard" replace />}
          />
        )}
        {!auth && <Route path="/" element={<Login />} />}
        {auth && (
          <Route path="sidebar" element={<Sidebar />}>
            <Route path="/sidebar/dashboard" element={<Dashboard />} />
            <Route path="/sidebar/teachers" element={<Teachers />} />
            <Route path="/sidebar/home" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Route>
        )}
        {!auth && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </div>
  );
}

export default App;
