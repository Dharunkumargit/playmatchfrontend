import ClassService from "../classes/Classes.service.js";

export const createClass = async (req, res) => {
  const data = await ClassService.createClass(req.body);
  res.status(201).json({ message: "Class created", data });
};

export const getClasses = async (req, res) => {
    try {
        const turfs = await ClassService.getAllClasses();
        res.status(200).json({ success: true, data: turfs });
      } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch classes" });
      }
};

export const getClassDetails = async (req, res) => {
  const data = await ClassService.getClassById(req.params.id);
  res.json(data);
};

export const updateClassById = async (req, res) => {
  try {
    const updatedClass = await ClassService.updateClass(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: updatedClass,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteClassById = async (req, res) => {
  try {
    await ClassService.deleteClass(req.params.id);

    res.status(200).json({
      success: true,
      message: "Class deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const addReview = async (req, res) => {
  const data = await ClassService.addReview(
    req.params.id,
    req.body
  );
  res.json({ message: "Review added", data });
};

export const bookClass = async (req, res) => {
  const data = await ClassService.bookClass(
    req.params.id,
    req.body
  );
  res.json({ message: "Class booked", data });
};