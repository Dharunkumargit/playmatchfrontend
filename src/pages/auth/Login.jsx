import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";
import LOGO from "../../assets/images/PlaymatchLogo.png"

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <>
        <div className="relative  flex flex-col justify-center items-center gap-6 bg-light-orange  h-screen ">
          
          <div className="w-full max-w-lg bg-white  p-7 rounded-xl shadow-lg">
            <div className="flex justify-between items-center py-2">
              <div>
                <img src={LOGO} alt="Logo" className="w-46 " />
              </div>
              <p className="text-3xl font-bold text-center my-4 mr-7">Login</p>
            </div>
            <form className="mx-4 mt-4">
              <label className="grid  mb-4">
                Email / Phone Number
                <input
                  type="text"
                  className=" border-2  border-input-bordergrey outline-none rounded-md py-2 px-2 my-1"
                  placeholder="Enter email or phone number"
                />
              </label>
  
              <label className="grid  relative">
                Password
                <input
                  type={showPassword ? "text" : "password"}
                  className=" border-2  border-input-bordergrey outline-none rounded-md py-2 px-2  pr-10"
                  placeholder="Enter password"
                />
                <span
                  className="absolute right-3 top-9 cursor-pointer dark:text-gray-400 text-black"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
              </label>
  
              <p
                onClick={() => navigate("/forgotpassword")}
                className="text-right text-sm cursor-pointer hover:underline mt-4 "
              >
                Forgot Password?
              </p>
              <input type="checkbox"  /> <label className="px-1.5 space-y-3">Remember me</label>
              <p
                onClick={() => navigate("/dashboard")}
                className=" cursor-pointer text-black bg-dark-orange text-center   w-full py-2 my-3 rounded-md text-lg font-semibold transition duration-200 "
              >
                Login
              </p>
            </form>
            <p className="text-center cursor-pointer text-sm py-4">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className=" hover:underline font-semibold"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;
  