import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbomzfOhM-BsNHGXcRBdJsO8g1shOox1a2Iw&s" alt="logo" className='w-16 ml-8 rounded-full'/>
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get started with Uber</h2>
          <Link to={"/user-login"} className='flex justify-center w-full bg-black py-3 text-white rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home