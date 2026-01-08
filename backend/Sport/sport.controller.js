import * as SportService from "../Sport/sport.service.js";

/* Add new sport (Dashboard) */
export const addSport = async (req, res) => {
  try {
    const sport = await SportService.createSport(req.body);
    res.status(201).json({
      message: "Sport added successfully",
      data: sport,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/* Get all sports (Dashboard table) */
export const getAllSports = async (req, res) => {
  try {
    const sports = await SportService.getAllSports();
    res.status(200).json({ data: sports });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get active sports (App selection screen) */
export const getActiveSports = async (req, res) => {
  try {
    const sports = await SportService.getActiveSports();
    res.status(200).json({ data: sports });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Update sport */
export const updateSport = async (req, res) => {
  try {
    const sport = await SportService.updateSportById(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Sport updated",
      data: sport,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSport = async (req, res) => {
  try {
    const sport = await SportService.deleteSportById(req.params.id);

    res.status(200).json({
      message: "Sport deleted successfully",
      data: sport,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/* Deactivate sport */
