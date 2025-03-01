import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast'
import { loginUser } from "../features/user/userSlice"

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {error, loading, user} = useSelector((state)=>state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const userData = {
      email,
      password
    };
    dispatch(loginUser(userData));
    if (loginUser.fulfilled) {
      toast.success("Login successfully");
      navigate("/home")
    }
  };
  
  useEffect(() => {
    if(error){
      toast.error(error);
    }

    return ()=>{
      setEmail("");
      setPassword("");
    }
  }, [error, dispatch]);

  useEffect(() => {
    if(user){
      navigate("/home")
    }
  }, [user])
  

  return (
    <>
    <div className='h-screen flex flex-col justify-between p-7 lg:w-[40%] m-auto'>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbomzfOhM-BsNHGXcRBdJsO8g1shOox1a2Iw&s" 
        alt="logo" 
        className='w-16 mb-10 rounded-full lg: flex-end' 
        />

      <form>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder='example@gmail.com' 
          className='bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-sm' 
        />

        <h3 className='text-lg font-medium'>Enter your password</h3>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          placeholder='Password' 
          className='bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-sm' 
        />

        <button 
          type="button" 
          onClick={handleSubmit} 
          className='bg-[#111] font-semibold text-white mb-7 rounded px-4 py-2 border w-full text-lg hover:cursor-pointer'
        >
          {loading? "Login...":"Login"}
        </button>

        <div className='text-center'>
          <span className='font-bold'>New here? </span>
          <Link to="/user-signup" className='text-blue-600'>Create an account</Link>
        </div>
      </form>

      <div>
        <Link to={"/captain-login"} 
          className='flex justify-center w-full bg-purple-800 py-3 text-white rounded mt-5 text-lg'
          >
          Sign in as Captain
        </Link>
      </div>
    </div>
          </>
  );
};

export default Login;
