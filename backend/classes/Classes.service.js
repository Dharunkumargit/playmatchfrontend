import Class from "../classes/Classes.model.js";

class ClassService {
  static async createClass(payload) {
    return await Class.create(payload);
  }

  static async getAllClasses() {
    return await Class.find().sort({ createdAt: -1 });
  }

  static async getClassById(id) {
    return await Class.findById(id);
  }

  static async updateClass(id, payload) {
    return await Class.findByIdAndUpdate(
      id,
      payload,
      { new: true, runValidators: true }
    );
  }
  static async deleteClass(id) {
  return await Class.findByIdAndDelete(id);
}
  static async addReview(classId, review) {
    return await Class.findByIdAndUpdate(
      classId,
      { $push: { reviews: review } },
      { new: true }
    );
  }

  static async bookClass(classId, booking) {
    const cls = await Class.findById(classId);

    const commission =
      (booking.amountPaid * cls.commissionPercent) / 100;

    cls.bookings.push(booking);
    cls.totalbookings += 1;
    cls.commissionearned += commission;

    return await cls.save();
  }
}

export default ClassService;