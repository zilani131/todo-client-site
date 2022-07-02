import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Navbar from "./Shared/Navbar";
import AddTask from "./Pages/AddTask";
import CompletedTask from "./Pages/CompletedTask";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import RequireAuth from "./Pages/RequireAuth";
import Calender from "./Pages/Calender";
import Footer from "./Shared/Footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        />

        <Route
          path="/addtask"
          element={
            <RequireAuth>
              <AddTask></AddTask>
            </RequireAuth>
          }
        />
        <Route
          path="/completetask"
          element={
            <RequireAuth>
              <CompletedTask></CompletedTask>
            </RequireAuth>
          }
        />
        <Route
          path="/calender"
          element={
            <RequireAuth>
             <Calender></Calender>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/registration" element={<Registration></Registration>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
