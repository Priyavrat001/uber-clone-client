import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Base from "./pages/Base";
import CaptainLogin from "./pages/captain/CaptainLogin";
import CaptainSignup from "./pages/captain/CaptainSignup";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './features/user/userSlice';
import { UserProtecetedRoute } from './components/ProtecetedRoute';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector(state => state.user);

  // Fetch user only if not already loading
  useEffect(() => {
    if (!user && !loading && !error) {
      dispatch(getUser());
    }
  }, [dispatch, user, loading, error]); 

  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <UserProtecetedRoute user={user}>
              <Base />
            </UserProtecetedRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-signup" element={<Signup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
