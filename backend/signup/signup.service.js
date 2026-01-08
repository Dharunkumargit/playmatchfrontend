import signup from "../signup/Signup.schema.js";

export const createUser = async (userdata) => {
  const { email, mobnum } = userdata;
  const Email = await signup.findOne({ email });
  const Phone = await signup.findOne({ mobnum });
  if (Email || Phone) {
    throw new Error("User Already Exists");
  }
  const newUser = new signup({
    ...userdata,
  });

  return await newUser.save();
};

export const getUserById = async (id) => {
    return await signup
      .findById(id)
      .select("name email mobnum gender location options");
  };

  export const getAllUsers = async () => {
    return await signup
      .find()
      .select("name email mobnum gender dob location options")
      .sort({ createdAt: -1 });
  };

export const userbyid = async (id, userdata) => {
  return await signup.findByIdAndUpdate(id, userdata, {
    new: true,
    runValidators: true,
  }).select("email mobnum options name ");
};

export const mobnum = async (mobnum) => {
  return await signup.findOne({ mobnum });
};

export const updatesportselectionbymobnum = async (mobnum, userdata) => {
  return await signup.findOneAndUpdate({ mobnum }, userdata, {
    new: true,
    runValidators: true,
  });
};