import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { captainLogin } from "../../features/captain/captainSlice";
import { motion } from "framer-motion";

const CaptainLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { captainDetails, loading, error } = useSelector((state) => state.captain);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const captainData = {
      email,
      password,
    };

    dispatch(captainLogin(captainData));

    if (captainLogin.fulfilled) {
      toast.success("Login successfully");
      navigate("/captain-home");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (captainDetails) {
      navigate("/captain-home");
    }

    return () => {
      setEmail("");
      setPassword("");
    };
  }, [error, dispatch, captainDetails]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4 }}
      className="h-screen flex flex-col justify-between p-7"
    >
      <img
        src="https://res.cloudinary.com/teepublic/image/private/s--vqMV6xd5--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-276/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-387/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1641318368/production/designs/26914025_0.jpg"
        alt="logo"
        className="w-16 mb-10 rounded-full"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="lg:flex m-auto flex-col h-full"
      >
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

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#111] font-semibold text-white mb-7 rounded px-4 py-2 border w-full text-lg hover:cursor-pointer"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="text-center">
          <span className="font-bold">Want to Join? </span>
          <Link to="/captain-signup" className="text-blue-600">
            Register as Captain
          </Link>
        </div>
      </form>

      <div className="flex items-center justify-center">
        <Link
          to={"/user-login"}
          className="flex justify-center w-full bg-purple-800 py-3 text-white rounded mt-5 text-lg lg:w-[20%]"
        >
          Sign in as User
        </Link>
      </div>
    </motion.div>
  );
};

export default CaptainLogin;
