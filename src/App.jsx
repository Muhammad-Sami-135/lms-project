import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login Page/Login";
import SignUp from "./Screens/Sign Up/Signup";
import { ToastContainer } from "react-toastify";
import { Protected } from "./Screens/Protected";
import { Autoroute } from "./Screens/Autoroute";
import ClippedDrawer from "./Screens/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Protected />}>
        <Route path="/Dashboard" element={<ClippedDrawer />}/>
        </Route>
        <Route element={<Autoroute />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
