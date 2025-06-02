import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const LocationSearch = ({ suggestions = [], setPickUp }) => {
    // Extract labels from API response structure
    let features = [];
    if (suggestions && suggestions.data && Array.isArray(suggestions.data.features)) {
        features = suggestions.data.features;
    }
    return (
        <AnimatePresence>
            <motion.div
                key="location-search"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {features.length === 0 && <div className='text-gray-400 text-center'>No suggestions found.</div>}
                {features.map((item, index) => (
                    <div key={index} onClick={() => {
                        setPickUp(item.properties.label);
                    }} className='flex space-y-2 items-center justify-start border-2 p-2 border-gray-50 active:border-black rounded-xl cursor-pointer'>
                        <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full px-3 mx-1'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='mx-5 font-medium'>{item.properties.label}</h4>
                    </div>
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export default LocationSearch