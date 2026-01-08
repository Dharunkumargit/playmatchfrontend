import Turf from "../turf/Turf.schema.js";

export const createTurf = async (data) => {
  return await Turf.create(data);
};

export const getAllTurfs = async () => {
  return await Turf.find().sort({ createdAt: -1 });
};

export const getTurfById = async (id) => {
  return await Turf.findById(id);
};

export const updateTurf = async (turfid, data) => {
  return await Turf.findByIdAndUpdate(turfid, data, { new: true });
};

export const deleteTurf = async (id) => {
  return await Turf.findByIdAndDelete(id);
};