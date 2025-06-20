import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import CaptainDetails from "../../components/captain/CaptainDetails";
import RidePop from "./RidePop";
import ConfirmRide from "../../components/captain/ConfirmRide";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../config/SocketContext";
import { userRideCOnfirm } from "../../features/ride/rideSlice";

const CaptainHome = () => {

 const {captainDetails} = useSelector(state=> state.captain);
 const socket = useSocket();

 const dispatch = useDispatch();


  const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const [ride, setRide] = useState("");

 useEffect(() => {
  let watchId;

  if (captainDetails?._id) {
    // Join room once
    socket.emit("join", { userType: "captain", userId: captainDetails._id });

    // Setup location watcher
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          socket.emit("update-location-captain", {
            captainId: captainDetails._id,
            location: {
              ltd: latitude,
              lng: longitude,
            },
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    }
  }

  // Cleanup
  return () => {
    if (watchId !== undefined) {
      navigator.geolocation.clearWatch(watchId);
    }
  };
}, [captainDetails, socket]);

socket.on("new-ride", (data)=>{
  setRide(data);
  setRidePopUpPanel(true);
});

const confirmRide = () => {
 dispatch(userRideCOnfirm({rideId:ride._id}))
}

  
  return (
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
      <div className="h-3/5">
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
      <CaptainDetails CaptainDetails={captainDetails}/>
      <AnimatePresence>
        <motion.div className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 transition-all duration-500 ease-in-out transform animate-slide-up"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}>
          {ridePopUpPanel && !confirmRidePopUp && (
            <RidePop
              setRidePopUpPanel={setRidePopUpPanel}
              setConfirmRidePopUp={setConfirmRidePopUp}
              ride={ride}
              confirmRide={confirmRide}
            />
          )}
          {confirmRidePopUp && (
            <ConfirmRide setConfirmRidePopUp={setConfirmRidePopUp} setRidePopUpPanel={setRidePopUpPanel} ride={ride} captainDetails={captainDetails}/>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CaptainHome;
