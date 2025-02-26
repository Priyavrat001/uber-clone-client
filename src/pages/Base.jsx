import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Base = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error, loading, user} = useSelector(state=>state.user);

  const handleLogout = ()=>{
    dispatch(logoutUser());
    navigate("/user-login")
  }
  return (
    <>
    <div>Hello 
      
      </div>

      <button className='bg-red-400' onClick={handleLogout}>logout</button>
    </>
  )
}

export default Base