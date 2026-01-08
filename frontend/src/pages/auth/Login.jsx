import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";
import axios from "axios";
import LOGO from "../../assets/images/PlaymatchLogo.png";
import { toast } from "react-toastify";
import { API } from "../../../const";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        `${API}/user/login`,
        { emailid, password }
      );

      localStorage.setItem("user", res.data.user);
      toast.success("Login Successful!");
      navigate("/dashboard");

    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed!");
    }
  };

  return (
    <>
      <div className="relative  flex flex-col justify-center items-center gap-6 bg-light-orange  h-screen ">
        <div className="w-full max-w-lg bg-white  p-7 rounded-xl shadow-lg">
          <div className="flex justify-between items-center py-2">
            <div>
              <img src={LOGO} alt="Logo" className="w-46 " />
            </div>
            <p className="text-3xl font-bold text-center my-4 mr-7">
              Login
            </p>
          </div>

          <form className="mx-4 mt-4" onSubmit={handleLogin}>

            <label className="grid  mb-4">
              Email ID
              <input
                type="text"
                value={emailid}
                 onChange={(e) => setEmailid(e.target.value)}
                className=" border-2  border-input-bordergrey outline-none rounded-md py-2 px-2 my-1"
                placeholder="Enter email"
              />
            </label>

            <label className="grid  relative">
              Password
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border-2 border-input-bordergrey outline-none rounded-md py-2 px-2  pr-10"
                placeholder="Enter password"
              />
              <span
                className="absolute right-3 top-9 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </label>
            <p onClick={() => navigate("/forgotpassword")} className="text-right text-sm cursor-pointer hover:underline mt-4 " > Forgot Password? </p>

            <button
              type="submit"
              className=" cursor-pointer text-black bg-dark-orange text-center w-full py-2 my-3 rounded-md text-lg font-semibold transition duration-200"
            >
              Login
            </button>

          </form>
          <p className="text-center cursor-pointer text-sm py-4"> Don’t have an account?{" "} <span onClick={() => navigate("/resetpassword")} className=" hover:underline font-semibold" > Sign up </span></p>
        </div>
      </div>
    </>
  );
};

export default Login;