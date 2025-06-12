import React from 'react'

const WaitingForDriver = ({coordinates, fares}) => {
  return (
    <div >
      <h5 className='p-1 text-center w-[93%] absolute top-0'>
        <i className="text-3 text-gray-200 xl ri-arrow-down-wide-line"></i>
      </h5>
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
            <h3 className='text-lg font-medium'>{coordinates.origin}</h3>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>{coordinates.destination}</h3>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3'>
          <i className="ri-currency-fill"></i>
          <div>
            <h3 className='text-lg font-medium'>₹{fares.car}</h3>
            <p className='-mt-1 text-small text-gray-600'>Cash cash</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver