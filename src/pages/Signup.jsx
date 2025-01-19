import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFrstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = () => {
    //write you submit code here;
  };

  useEffect(() => {
    // write your clean up code here
  }, [])

  return (
    <div className='h-screen flex flex-col justify-between p-7'>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbomzfOhM-BsNHGXcRBdJsO8g1shOox1a2Iw&s"
        alt="logo"
        className='w-16 mb-10 rounded-full'
      />

      <form>
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-2'>
          <input
            type="text"
            value={firstname}
            onChange={((e) => setFrstname(e.target.value))}
            required
            placeholder='First name'
            className='bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm'
          />
          <input
            type="text"
            value={lastname}
            required
            onChange={(e) => setLastname(e.target.value)}
            placeholder='Last name'
            className='bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm'
          />
        </div>
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
          Signup
        </button>

        <div className='text-center'>
          <span className='font-bold'>Already have an Account? </span>
          <Link to="/user-login" className='text-blue-600'>Login</Link>
        </div>
      </form>

      <div>
        <p className='text-[9px] leading-tight'>
          We values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and disclose information when you sign up for our service. By signing up, you agree to the terms of this Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default Signup