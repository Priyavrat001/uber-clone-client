import React, { useEffect, lazy, Suspense } from 'react';
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { UserProtecetedRoute } from './components/ProtecetedRoute';
import { getUser } from './features/user/userSlice';
import LayoutLoading from './components/LayoutLoading';

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

  useEffect(() => {
    if (!user && !loading && !error) {
      dispatch(getUser());
    }
  }, [dispatch, user, loading, error]); 

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
