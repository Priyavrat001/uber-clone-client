import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRide = ({setConfirmRidePopUp, setRidePopUpPanel}) => {

    const [otp, setOtp] = useState("")

  const handleSubmit = ()=>{
    //enter your code here
  }
  return (
    <div className='h-[90vh]'>
    <h5 onClick={() => setRidePopUpPanel(false)} className='p-1 text-center w-[93%] absolute top-0'>
      <i className="text-3 text-gray-200 xl ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-5'>Confirm This Ride To Start</h3>
<div className='flex items-center justify-between bg-yellow-400 rounded-lg py-1'>
    <div className='flex items-center gap-3 mt-4'>
    <img className="w-10 h-12 rounded-full object-cover" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="captain image" />
    <h2 className='tet-lg font-medium'>Priyavrat</h2>
    </div>
    <h5 className='text-lg font-semibold'>2.2 km</h5>
</div>
    <div className='w-full mt-5'>
      <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="text-lg ri-map-pin-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>115, ayodhya</h3>
          <p className='-mt-1 text-small text-gray-600'>Greater noaida</p>
        </div>
      </div>
      <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="ri-map-pin-2-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>115, currentlocation</h3>
          <p className='-mt-1 text-small text-gray-600'>Greater noaida</p>
        </div>
      </div>
      <div className='flex items-center gap-5 p-3'>
        <i className="ri-currency-fill"></i>
        <div>
          <h3 className='text-lg font-medium'>₹193.22</h3>
          <p className='-mt-1 text-small text-gray-600'>Cash cash</p>
        </div>
      </div>
    </div>
   <form >
   <div>
    <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Enter your otp here" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
      <Link to="/captain-riding" onClick={()=>{
        handleSubmit
        setRidePopUpPanel(false)
        setConfirmRidePopUp(false)
      }} className='w-full flex justify-center mt-5 bg-green-600 text-white font-semibold px-3 rounded-lg py-4 text-center'>Confirm</Link>
    </div>
    <div>
      <button onClick={()=> {
        setRidePopUpPanel(false)
        setConfirmRidePopUp(false)
      }} className='w-full mt-1 text-white font-semibold px-3 rounded-lg py-4 text-center bg-red-600'>Cancel</button>
    </div>
   </form>
  </div>
  )
}

export default ConfirmRide