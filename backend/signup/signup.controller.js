import * as Signupservice from "../signup/signup.service.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await Signupservice.createUser(req.body);
    res.status(201).json({
      success: true,
      message: "User Created Succesfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await Signupservice.getUserById(id);
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User Not Found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  export const getAllUsers = async (req, res) => {
    try {
      const users = await Signupservice.getAllUsers();
  
      res.status(200).json({
        success: true,
        count: users.length,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

export const Updateuserbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobnum, options,} = req.body;
    const updateduser = await Signupservice.userbyid(id, {
      name,
      email,
      mobnum,
      options,
    
    });

    if (!updateduser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    res.status(200).json({
      message: "User Updated successfully",
      User: updateduser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  const { mobnum } = req.body;
  try {
    const phone = await Signupservice.mobnum(mobnum);
    if (!phone) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Login Successfully",
        data: {
          id: phone._id,
          name: phone.name,
          email: phone.email,
          mobnum: phone.mobnum.toString,
          hasSportsSelection: phone.options && phone.options.length > 0, // Check if user has selected sports
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const UpdateSelectionbymobnum = async (req, res) => {
  try {
    const { mobnum } = req.query;
    const { options } = req.body;
    const updatedoptions = await Signupservice.updatesportselectionbymobnum(
      mobnum,
      { options }
    );

    if (!updatedoptions) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    res.status(200).json({
      message: "Sports Selection Updated successfully",
      options: updatedoptions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
