
import * as User from "../user/user.service.js";
import * as OTPService from "../user/otp.service.js";



// CREATE USER
export const addUser = async (req, res) => {
    try {
      const user = await User.addUser(req.body);
      return res.status(201).json({
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  
  
  
  export const getUser = async (req, res) => {
    try {
      const users = await User.getUser();
      res.status(200).json({
        message: "Users fetched successfully",
        count: users.length,
        data: users,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  };
  
  export const loginUser = async (req, res) => {
    try {
      const user = await User.loginUser(req.body);
  
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          id: user._id,
          name: user.name,
          emailid: user.emailid,
          role: user.role,
        },
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.updateUser(id, req.body);
  
      res.status(200).json({
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  };
  
  export const removeUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteduser = await User.removeUser(id);
  
      if (!deleteduser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({
        message: "User deleted successfully",
        data: deleteduser,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  };

  export const sendOtp = async (req, res) => {
    try {
      const { phonenumber } = req.body;   // <-- SAFE DESTRUCTURING
  
      if (!phonenumber) {
        return res.status(400).json({
          success: false,
          message: "Phone number is required"
        });
      }
  
      const otp = await OTPService.sendOtp(phonenumber);
  
      res.json({
        success: true,
        message: "OTP sent successfully",
        otp
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
  };
  
  
  
  