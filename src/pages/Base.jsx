import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmVehicel from '../components/ConfirmVehicel';
import LocationSearch from '../components/LocationSearch';
import LookingForDriver from '../components/LookingForDriver';
import SelectCar from '../components/SelectCar';
import WaitingForDriver from '../components/WaitingForDriver';
import { getDestence, getSuggestedLoctions } from '../features/map/mapSlice';
import { getFarePrice, createNewRide } from '../features/ride/rideSlice';
import {toast} from "react-hot-toast";

const Base = () => {

  const { map, error:mapError, loading:mapLoading } = useSelector(state => state.map);
  const { fares, newRide, loading, error } = useSelector(state => state.ride);

  const suggestions = map.suggestions || [];

  const dispatch = useDispatch();

  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [screen, setScreen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmVehicel, setConfirmVehicel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [driverFound, setDriverFound] = useState(false);
  const [activeField, setActiveField] = useState('pickup');

  const handleSubmit = (e) => {
    e.preventDefault();
    //enter you code here

  };

  useEffect(() => {
    if (activeField === 'pickup' && pickUp) {
      dispatch(getSuggestedLoctions(pickUp));
    } else if (activeField === 'destination' && destination) {
      dispatch(getSuggestedLoctions(destination));
    }

  }, [pickUp, destination, activeField, dispatch]);

  const findTrip = () => {
    if (!pickUp || !destination) {
      alert("Plase selcect all the location");
      return;
    }
    setVehiclePanelOpen(true);
    setScreen(false);

    if(pickUp && destination){
      dispatch(getFarePrice({pickUp, destination}))
    };
    if(pickUp && destination){
      dispatch(getDestence({origin:pickUp, destination}))
    };

    if(error.faresError){
      toast.error(error.message || "Something went wrong!");
      return;
    }
  };


  const createARide = async(vechicleType)=>{
    const rideData = {
      pickUp,
      destination,
      vechicleType
    };

    if(rideData){
      dispatch(createNewRide(rideData));
    };

    if(error){
      toast.error(error.message || "Unable to create a new ride");
    };
    console.log(vechicleType)
    console.log(newRide)
  };

  

  return (
    <div className='m-h-screen relative overflow-hidden'>
      <img className='w-[16vw] absolute left-5 top-5' src='https://logospng.org/download/uber/logo-uber-4096.png' alt='uber logo' />
      <div className='h-screen w-screen'>
        {/* this is temp image for the map place */}
        <AnimatePresence>
          {screen === false ? (
            <motion.img
              key="map-img"
              className='h-full w-full object-cover transition-all duration-500'
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="temp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.img
              key="map-img-hidden"
              className='h-full hidden w-full object-cover transition-all duration-500'
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="temp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <motion.div className='h-[30%] p-5 bg-white relative'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}>
          <h5 className='absolute top-6 right-6 text-3xl'>
            {screen === false ? (<i className="ri-arrow-up-wide-line" onClick={() => setScreen(true)}></i>) : <i className="ri-arrow-down-wide-line" onClick={() => setScreen(false)}></i>}
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input
              onClick={() => { setScreen(true); setActiveField('pickup'); }}
              value={pickUp}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text"
              placeholder='Added a pickup location'
              onChange={(e) => setPickUp(e.target.value)}
            />
            <input
              onClick={() => { setScreen(true); setActiveField('destination'); }}
              value={destination}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              type="text"
              placeholder='Enter your destination'
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
          <button type="button" className='w-full bg-black text-white font-semibold px-3 rounded-lg py-4 text-center mt-5 hover:cursor-pointer' onClick={findTrip}>
            Find Trip
          </button>
        </motion.div>
        <AnimatePresence>
          {screen === true ? (
            <motion.div
              className="h-[70%] bg-white transition-all duration-300 overflow-y-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <LocationSearch
                suggestions={suggestions}
                setPickUp={activeField === 'pickup' ? setPickUp : setDestination}
              />
            </motion.div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
      {/* AnimatePresence for bottom panels */}
      <AnimatePresence>
        {vehicleFound && (
          <motion.div
            className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LookingForDriver setDriverFound={setDriverFound} setVehicleFound={setVehicleFound} coordinates={map?.coordinates} fares={fares}/>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {driverFound && (
          <motion.div
            className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <WaitingForDriver coordinates={map?.coordinates} fares={fares}/>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className='fixed z-0 bottom-0 bg-white w-full p-3 translate-y-0'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ConfirmVehicel
          setVehiclePanelOpen={setVehiclePanelOpen}
          confirmVehicel={confirmVehicel}
          setVehicleFound={setVehicleFound}
          setConfirmVehicel={setConfirmVehicel}
          coordinates={map.coordinates}
          fares={fares}
        />
      </motion.div>
      <SelectCar vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} confirmVehicel={confirmVehicel} setConfirmVehicel={setConfirmVehicel} fares={fares} duration={map.duration} createARide={createARide}/>
    </div>
  )
}

export default Base