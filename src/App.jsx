import React, { useEffect, lazy, Suspense } from 'react';
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CaptainProtectedRoute, UserProtecetedRoute } from './components/ProtecetedRoute';
import { getUser } from './features/user/userSlice';
import LayoutLoading from './components/LayoutLoading';
import Riding from './pages/Riding';
import CaptainHome from './pages/captain/CaptainHome';
import { getCaptain } from './features/captain/captainSlice';
import CaptainRiding from './pages/captain/CaptainRiding';
import 'remixicon/fonts/remixicon.css'

// Lazy-loaded pages
const Base = lazy(() => import("./pages/Base"));
const CaptainLogin = lazy(() => import("./pages/captain/CaptainLogin"));
const CaptainSignup = lazy(() => import("./pages/captain/CaptainSignup"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

const App = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.user);
  const {captain, loading:captainLoading, error:captainError} = useSelector(state=> state.captain)

  useEffect(() => {
    if (!user && !loading && !error) {
      dispatch(getUser());
    }
  }, [dispatch, user, loading, error]); 

  useEffect(()=>{
    if(!captain && !captainLoading && !captainError){
      dispatch(getCaptain());
    }
  },[captain, captainLoading, captainError]);

  return loading ? <LayoutLoading/>:(
    <>
      <Toaster />
      <Suspense fallback={<LayoutLoading/>}>
        <Routes>
          <Route
            path="/home"
            element={
              <UserProtecetedRoute user={user} loading={loading}>
                <Base />
              </UserProtecetedRoute>
            }
          />
          <Route path='/riding' element={
            <UserProtecetedRoute user={user} loading={loading}>
              <Riding/>
            </UserProtecetedRoute>
          }/>
          <Route path='/captain-home' element={
            <CaptainProtectedRoute captain={captain} captainLoading={captainLoading}>
              <CaptainHome/>
            </CaptainProtectedRoute>
          }/>
          <Route path='/captain-riding' element={
            <CaptainProtectedRoute captain={captain} captainLoading={captainLoading}>
              <CaptainRiding/>
            </CaptainProtectedRoute>
          }/>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-signup" element={<Signup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
