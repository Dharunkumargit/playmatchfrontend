import userModel from "../users/Users.schema.js";

export const createUser = async (userdata) => {
    const { email, mobnum } = userdata;
    const Email = await userModel.findOne({ email });
    const Phone = await userModel.findOne({ mobnum });
    if (Email || Phone) {
      throw new Error("User Already Exists");
    }
    
    const newUser = new userModel({
      ...userdata,
    });
  
    return await newUser.save();
  };
  
  export const userbyid = async (id, userdata) => {
    return await userModel.findByIdAndUpdate(id, userdata, {
      new: true,
      runValidators: true,
    }).select("email mobnum options name location");
  };
  
  export const mobnum = async (mobnum) => {
    return await userModel.findOne({ mobnum });
  };
  
  export const updatesportselectionbymobnum = async (mobnum, userdata) => {
    return await userModel.findOneAndUpdate({ mobnum }, userdata, {
      new: true,
      runValidators: true,
    });
  };