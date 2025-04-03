import React from 'react'

const SelectCar = ({ vehiclePanelOpen, setVehiclePanelOpen, setConfirmVehicel }) => {
  return (
    <>
      {
        vehiclePanelOpen && (
          <div className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'>
            <div className="flex items-center justify-between m-auto relative">
              <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
              <h5 className="text-3xl cursor-pointe mb-3">
                <i className="ri-arrow-down-wide-line" onClick={() => setVehiclePanelOpen(false)}></i>
              </h5>
            </div>
            <div onClick={() => setConfirmVehicel(true)} className='flex items-center border-2 active:border-black bg-gray-100 rounded-xl justify-between w-full px-3 py-6 mb-2'>
              <img className='h-11' src="https://th.bing.com/th/id/R.8b01377204f7e5e60f3928fa9c6d8d8d?rik=veNTNapnhdPf5A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-hd-images-of-cars-volkswagen-png-hd-1500.png&ehk=bzMQ1ueAXMsJzhilqNehN77R9uwSPUm8hoyg%2bCU3wYo%3d&risl=&pid=ImgRaw&r=0" alt="car image" />

              <div className='w-1/2'>
                <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-fill">4</i></span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, compact rideds</p>
              </div>
              <h2 className='text-2xl font-semibold'>₹193.22</h2>
            </div>
            <div onClick={() => setConfirmVehicel(true)} className='flex items-center border-2 active:border-black bg-gray-100 rounded-xl justify-between w-full px-3 py-6 mb-2'>
              <img className='h-11' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="car image" />

              <div className='w-1/2'>
                <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-fill">1</i></span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, motorcyle rideds</p>
              </div>
              <h2 className='text-2xl font-semibold'>₹193.22</h2>
            </div>
            <div onClick={() => setConfirmVehicel(true)} className='flex items-center border-2 active:border-black bg-gray-100 rounded-xl justify-between w-full px-3 py-6 mb-2'>
              <img className='h-11' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="car image" />

              <div className='w-1/2'>
                <h4 className='font-medium text-lg'>Auto<span><i className="ri-user-fill">3</i></span></h4>
                <h5 className='font-medium text-sm'>2 mins away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable, auto rideds</p>
              </div>
              <h2 className='text-2xl font-semibold'>₹193.22</h2>
            </div>
          </div>
        )
      }
    </>
  )
}

export default SelectCar