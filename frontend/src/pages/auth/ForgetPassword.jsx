import { useNavigate } from "react-router";
import LOGO from "../../assets/images/PlaymatchLogo.png";

const ForgotPassword = () => {
    const navigate = useNavigate();
  
    return (
      <>
        <div className="relative font-layout-font flex flex-col justify-center items-center gap-6 bg-light-orange   h-screen ">
          
          <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg">
            <div className="flex justify-between items-center py-4">
              <div>
                <img src={LOGO} alt="Logo" className="w-40" />
                {/* <img src={Logo_L} alt="Logo" className="w-44 dark:hidden" /> */}
              </div>
              <p className="text-xl font-bold text-center my-4 mr-6">Forgot Password?</p>
            </div>
            <form className="mx-4 mt-4">
              <label className="grid  mb-8">
                Email / Phone Number
                <input
                  type="text"
                  className=" border-2 dark:border-overall_bg-dark border-[#D0D6FF] outline-none rounded-md py-2 px-2 my-1"
                  placeholder="Enter email or phone number"
                />
              </label>
  
              <p
                className=" cursor-pointer bg-dark-orange text-black text-center   w-full py-2 my-3 rounded-md text-lg font-semibold transition duration-200 "
              >
                Send Email
              </p>
            </form>
            <p
              onClick={() => navigate("/resetpassword")}
              className="text-center cursor-pointer text-sm py-4 hover:underline"
            >
              Back to Login
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default ForgotPassword;
  