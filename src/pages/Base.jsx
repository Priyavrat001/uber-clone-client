import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import LocationSearch from '../components/LocationSearch';
import SelectCar from '../components/SelectCar';
import ConfirmVehicel from '../components/ConfirmVehicel';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Base = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [screen, setScreen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmVehicel, setConfirmVehicel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [driverFound, setDriverFound] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //enter you code here

  }
  return (
    <div className='m-h-screen relative overflow-hidden'>
      <img className='w-[16vw] absolute left-5 top-5' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='uber logo' />

      <div className='h-screen w-screen'>
        {/* this is temp image for the map place */}

        {
          screen === false ? (<img className='h-full w-full object-cover transition-all duration-500' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temp" />) : (<img className='h-full hidden w-full object-cover transition-all duration-500' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="temp" />
          )}
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 className='absolute top-6 right-6 text-3xl'>
            {screen === false ? (<i className="ri-arrow-up-wide-line" onClick={() => setScreen(true)}></i>) : <i className="ri-arrow-down-wide-line" onClick={() => setScreen(false)}></i>}
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input onClick={() => setScreen(true)} value={pickUp} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Added a pickup location' onChange={(e) => setPickUp(e.target.value)} />
            <input onClick={() => setScreen(true)} value={destination} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter your destination' onChange={(e) => setDestination(e.target.value)} />
          </form>
        </div>
        {
          screen === true ? (
            <div className="h-[70%] bg-white transition-all duration-300 overflow-y-auto">
              <LocationSearch vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} setScreen={setScreen} />
            </div>
          ) : (
            <div className="h-0 bg-white transition-all duration-300"></div>
          )
        }
      </div>
      <SelectCar vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} confirmVehicel={confirmVehicel} setConfirmVehicel={setConfirmVehicel} />

      <div className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'>
        <ConfirmVehicel
          setVehiclePanelOpen={setVehiclePanelOpen}
          confirmVehicel={confirmVehicel}
          setVehicleFound={setVehicleFound}
          setConfirmVehicel={setConfirmVehicel}
        />
      </div>
      <div className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'>
        {
          vehicleFound && <LookingForDriver setDriverFound={setDriverFound} setVehicleFound={setVehicleFound}/>
        }
      </div>
      <div className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'>
        {
          driverFound &&  <WaitingForDriver  />
        }
      </div>
    </div>
  )
}

export default Base