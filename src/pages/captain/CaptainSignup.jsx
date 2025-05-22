import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { captainSignup } from "../../features/captain/captainSlice";

const CaptainSignup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { captain, loading, error } = useSelector(state => state.captain);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicle, setVehicle] = useState({
    color: "",
    plate: "",
    capacity: "",
    vehicleType: "",
  })

  const handleSubmit = () => {
    const captainData = {
      firstname,
      lastname,
      email,
      password,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
      }
    }
    dispatch(captainSignup(captainData))
    if (captainSignup.fulfilled) {
      toast.success("Signup Successfully");
      navigate("/captain-login")
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    };

    if(captain){
      navigate("/captain-home")
    }

    return () => {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setVehicle("");
    }
  }, [error, dispatch]);

  return (
    <div className="h-screen flex flex-col justify-between p-7 items-center">
      <img
        src="https://res.cloudinary.com/teepublic/image/private/s--vqMV6xd5--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-276/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-387/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1641318368/production/designs/26914025_0.jpg"
        alt="logo"
        className="w-16 mb-10 rounded-full"
      />

      <form>
        <h3 className="text-lg font-medium mb-2">What's your name</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            placeholder="First name"
            className="bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm"
          />
          <input
            type="text"
            value={lastname}
            required
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last name"
            className="bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm"
          />
        </div>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com"
          className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-sm"
        />

        <h3 className="text-lg font-medium">Enter your password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-sm"
        />

        <div className="flex gap-2">
          <input
            type="text"
            value={vehicle.color}
            onChange={(e) => setVehicle({...vehicle, color:e.target.value})}
            required
            placeholder="Vechicle Color"
            className="bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm"
          />
          <input
            type="text"
            value={vehicle.plate}
            required
            onChange={(e) => setVehicle({...vehicle, plate:e.target.value})}
            placeholder="Vechicle Plate"
            className="bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={vehicle.capacity}
            onChange={(e) => setVehicle({...vehicle, capacity:e.target.value})}
            required
            placeholder="Vechicle Captacity"
            className="bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm"
          />
          <select
            value={vehicle.vehicleType}
            onChange={(e) => setVehicle({ ...vehicle, vehicleType: e.target.value })}
            className="bg-[#eeeeee] mb-7 rounded border w-1/2 px-7 text-lg placeholder:text-sm"
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="auto">Auto</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#111] font-semibold text-white mb-7 rounded px-4 py-2 border w-full text-lg hover:cursor-pointer"
        >
          {loading ? "Signup..." : "Signup"}
        </button>

        <div className="text-center">
          <span className="font-bold">Already have an Account? </span>
          <Link to="/captain-login" className="text-blue-600">
            Login
          </Link>
        </div>
      </form>

      <div>
        <p className="text-[9px] leading-tight">
          We values your privacy and is committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, store,
          and disclose information when you sign up for our service. By signing
          up, you agree to the terms of this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
