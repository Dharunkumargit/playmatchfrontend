import Sport from "../Sport/sport.model.js";

/* Create Sport */
export const createSport = async (payload) => {
  const exists = await Sport.findOne({
    sportname: payload.sportname,
  });

  if (exists) {
    throw new Error("Sport already exists");
  }

  return await Sport.create(payload);
};

/* Get all sports (Dashboard) */
export const getAllSports = async () => {
  return await Sport.find().sort({ createdAt: -1 });
};

/* Get active sports (App / Selection UI) */
export const getActiveSports = async () => {
  return await Sport.find({ status: "active" }).sort({ sportname: 1 });
};

/* Update sport */
export const updateSportById = async (id, payload) => {
  const sport = await Sport.findById(id);
  if (!sport) throw new Error("Sport not found");

  return await Sport.findByIdAndUpdate(id, payload, {
    new: true,
  });
};

export const deleteSportById = async (id) => {
  const sport = await Sport.findById(id);
  if (!sport) throw new Error("Sport not found");

  await Sport.findByIdAndDelete(id);
  return sport;
};

/* Soft delete (Inactive) */
