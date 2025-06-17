import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const RidePop = ({setRidePopUpPanel, setConfirmRidePopUp, ride}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setRidePopUpPanel(false)}
      >
        <h5 className='p-1 text-center w-[93%] absolute top-0'>
          <i className="text-3 text-gray-200 xl ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5'>New ride available</h3>
    <div className='flex items-center justify-between bg-yellow-400 rounded-lg py-1'>
        <div className='flex items-center gap-3 mt-4'>
        <img className="w-10 h-12 rounded-full object-cover" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="captain image" />
        <h2 className='tet-lg font-medium'>{ride?.user?.firstname + " " + ride?.user?.lastname}</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 km</h5>
    </div>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>{ride.pickUp}</h3>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>{ride.destination}</h3>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{ride.fare}</h3>
              <p className='-mt-1 text-small text-gray-600'>Cash cash</p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={()=> {
            setConfirmRidePopUp(true)
            setRidePopUpPanel(false)
          }} className='w-full mt-5 bg-green-600 text-white font-semibold px-3 rounded-lg py-4 text-center'>Accept</button>
        </div>
        <div>
          <button onClick={()=> setRidePopUpPanel(false)} className='w-full mt-1 bg-gray-300 text-gray-700 font-semibold px-3 rounded-lg py-4 text-center'>Ignore</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RidePop