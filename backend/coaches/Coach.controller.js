import  CoachService from "../coaches/Coach.service.js";

export const createCoach = async (req, res) => {
  try {
    const coach = await CoachService.createCoach(req.body);
    res.status(201).json({ success: true, coach });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getCoaches = async (req, res) => {
  try {
    const coaches = await CoachService.getAllCoaches({
      status: "active", // app will see only active coaches
    });
    res.json({ success: true, coaches });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getCoachById = async (req, res) => {
  try {
    const coach = await CoachService.getCoachById(req.params.id);
    res.json({ success: true, coach });
  } catch (err) {
    res.status(404).json({ success: false, message: "Coach not found" });
  }
};

export const updateCoach = async (req, res) => {
  try {
    const coach = await CoachService.updateCoach(
      req.params.id,
      req.body
    );
    res.json({ success: true, coach });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteCoach = async (req, res) => {
  try {
    await CoachService.deleteCoach(req.params.id);
    res.json({ success: true, message: "Coach deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const coach = await CoachService.addReview(
      req.params.id,
      req.body
    );
    res.json({ success: true, coach });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};