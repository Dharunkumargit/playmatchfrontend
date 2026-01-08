import Coach from "../coaches/Coach.schema.js";
import Class from "../classes/Classes.model.js";

export const globalSearch = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Search query is required"
      });
    }

    const regex = new RegExp(q, "i");

    const [coaches, classes] = await Promise.all([
      Coach.find({
        status: "active",
        $or: [
          { coachName: regex },
          { sports: regex },
          { sportsCoached: regex }
        ]
      }).select("coachName sports experience rating profilePicture"),

      Class.find({
        status: "Active",
        $or: [
          { classesname: regex },
          { coach: regex },
          { location: regex }
        ]
      }).select("classesname coach location duration price")
    ]);

    //normalized coaches data
    const normalizedCoaches = coaches.map(coach => {
      const coachObj = coach.toObject();
      
      // Convert sports to array if it's a string
      if (typeof coachObj.sports === 'string') {
        coachObj.sports = [coachObj.sports];
      } else if (!Array.isArray(coachObj.sports)) {
        coachObj.sports = [];
      }
      
      return coachObj;
    });

    res.status(200).json({
      success: true,
      query: q,
      results: {
        coaches: normalizedCoaches,//
        classes
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Search failed",
      error: error.message
    });
  }
};