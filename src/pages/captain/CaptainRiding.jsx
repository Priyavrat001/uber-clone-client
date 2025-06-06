import { Link } from 'react-router-dom'
import React, { useState } from "react";
import FinishRide from "../../components/captain/FinishRide"
import { motion, AnimatePresence } from 'framer-motion';

const CaptainRiding = () => {

    const [finishRide, setFinishRide] = useState(false);

    return (
        <>
            <div className="h-screen">
                <div className="fixed p-3 top-0 flex items-center justify-between w-full">
                    <img className='w-[16vw]' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='uber logo' />
                    <Link
                        to={"/home"}
                        className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
                    >
                        <i className="text-lg font-medium ri-logout-box-r-line"></i>
                    </Link>
                </div>
                <div className="h-4/5" >
                    <motion.img
                        className="h-full w-full object-cover transition-all duration-500"
                        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                        alt="temp"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <AnimatePresence>
                  <motion.div
                    className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-500'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={()=>{ setFinishRide(true) }}
                  >
                    <h5 className='p-1 text-center w-[95%] absolute top-0'>
                        <i className="text-3xl text-gray-200 xl ri-arrow-up-wide-line"></i>
                    </h5>
                    <h4 className='text-xl font-semibold'>4 KM away</h4>
                    <button className='flex justify-center bg-green-600 text-white font-semibold px-3 rounded-lg py-4 text-center'>Complete Ride</button>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  {finishRide && (
                    <motion.div className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 transition-all duration-500 ease-in-out transform animate-slide-up"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ duration: 0.4 }}>
                      <FinishRide setFinishRide={setFinishRide}/>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default CaptainRiding