import React from 'react'

const LocationSearch = ({ vehiclePanelOpen, setVehiclePanelOpen, setScreen }) => {
    const locations = [
        "New York, USA",
        "Los Angeles, USA",
        "Chicago, USA",
        "Houston, USA",
        "Miami, USA",
        "Toronto, Canada",
        "Vancouver, Canada",
        "London, UK",
        "Paris, France",
        "Berlin, Germany",
        "Tokyo, Japan",
        "Sydney, Australia",
        "Mumbai, India",
        "Bangalore, India",
        "Dubai, UAE"
    ];

    return (
        <>
            {/* // tem data */}
            <div>
                {
                    locations.map((item, index) => {
                        return (
                            <div key={index} onClick={() => {
                                setVehiclePanelOpen(true);
                                setScreen(false)
                            }} className='flex space-y-2 items-center justify-start border-2 p-2 border-gray-50 active:border-black rounded-xl'>
                                <h2 className='bg-[#eee] h-10 flex items-center justfiy-center w-10 rounded-full px-3 mx-1'><i className="ri-map-pin-fill"></i></h2>
                                <h4 className='mx-5 font-medium'>
                                    {item}
                                </h4>

                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default LocationSearch