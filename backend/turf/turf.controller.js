import * as TurfService from "../turf/turf.service.js";
import { getFavoriteTurfIds } from "../favorite/Favorite.service.js";
export const createTurf = async (req, res) => {
  try {
    const newTurf = await TurfService.createTurf(req.body);
    res.status(201).json({ success: true, data: newTurf });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getTurfs = async (req, res) => {
  try {
    const userId = req.query.userId;

    const turfs = await TurfService.getAllTurfs();
    const favoriteIds = userId
      ? await getFavoriteTurfIds(userId)
      : [];

    const result = turfs.map(turf => ({
      ...turf.toObject(),
      isFavorite: favoriteIds.includes(turf._id.toString()),
    }));

    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch turfs" });
  }
};

export const getTurf = async (req, res) => {
  try {
    const turf = await TurfService.getTurfById(req.params.id);
    if (!turf) {
      return res.status(404).json({ success: false, message: "Turf not found" });
    }
    res.status(200).json({ success: true, data: turf });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateTurf = async (req, res) => {
  try {
    const updated = await TurfService.updateTurf(req.params.turfid, req.body);
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteTurf = async (req, res) => {
    try {
      const deleted = await TurfService.deleteTurf(req.params.id);
  
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Turf not found" });
      }
  
      res.status(200).json({ success: true, message: "Turf deleted successfully" });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };