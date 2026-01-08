import * as UserService from "../users/Users.service.js"

export const createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json({
      message: "User Created Succesfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

export const Updateuserbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, mobnum, options,location} = req.body;
    const updateduser = await UserService.userbyid(id, {
      name,
      email,
      mobnum,
      options,
      location
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
    const phone = await UserService.mobnum(mobnum);
    if (!phone) {
      return res.status(404).json({
        message: "User Not Found",
      });
    } else {
      res.status(200).json({
        message: "Login Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const UpdateSelectionbymobnum = async (req, res) => {
  try {
    const { mobnum } = req.query;
    const { options } = req.body;
    const updatedoptions = await UserService.updatesportselectionbymobnum(
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