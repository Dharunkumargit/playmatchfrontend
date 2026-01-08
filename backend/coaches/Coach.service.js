import Coach from "../coaches/Coach.schema.js";

class CoachService {
  static async createCoach(data) {
    return await Coach.create(data);
  }

  static async getAllCoaches(filter = {}) {
    return await Coach.find(filter).sort({ createdAt: -1 });
  }

  static async getCoachById(id) {
    return await Coach.findById(id);
  }

  static async updateCoach(id, data) {
    return await Coach.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteCoach(id) {
    return await Coach.findByIdAndDelete(id);
  }

  static async addReview(coachId, review) {
    const coach = await Coach.findById(coachId);
    if (!coach) throw new Error("Coach not found");
  
    coach.reviews.push(review);
  
    const total = coach.reviews.reduce((sum, r) => sum + r.rating, 0);
    coach.averageRating = total / coach.reviews.length;
  
    return await coach.save();
  }
}

export default CoachService;