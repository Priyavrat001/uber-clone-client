import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <>
    <div className='h-screen'>
        <Link to={"/home"} className='fixed right-2 top-2 h-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>
        <div className='h-1/2'>
        <img className='h-full w-full object-cover transition-all duration-500' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temp" />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
        <img className='h-10' src="https://th.bing.com/th/id/R.8b01377204f7e5e60f3928fa9c6d8d8d?rik=veNTNapnhdPf5A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-hd-images-of-cars-volkswagen-png-hd-1500.png&ehk=bzMQ1ueAXMsJzhilqNehN77R9uwSPUm8hoyg%2bCU3wYo%3d&risl=&pid=ImgRaw&r=0" alt="car image" />
        <div className='text-right'>
          <h2 className='tex-lg font-medium'>Priyavrat</h2>
          <h4 className='font-semibold text-xl -mt-1 -mb-1'>UP36 BM 2254</h4>
          <p className='text-sm text-gray-600'>Maruti suzuki aulto</p>
        </div>
      </div>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>115, ayodhya</h3>
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
    <button className='w-full mt-5 bg-green-600 text-white font-semibold px-3 rounded-lg py-4 text-center'>Make a payment</button>
        </div>
    </div>
    </>
  )
}

export default Riding