import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home"
import Login from './pages/Login'
import Signup from './pages/Signup'
import CaptainLogin from "./pages/captain/CaptainLogin"
import CaptainSignup from "./pages/captain/CaptainSignup"

const App = () => {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/user-login"} element={<Login />} />
        <Route path={"/user-signup"} element={<Signup />} />
        <Route path={"/captain-login"} element={<CaptainLogin />} />
        <Route path={"/captain-signup"} element={<CaptainSignup />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App