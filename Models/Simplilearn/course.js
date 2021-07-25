const mongoose = require("mongoose");
const collectionName = "course_bought";

const CourseBought = mongoose.Schema(
  {
    id: { type: String, required: true },
    user: { type: String, required: true },
    price: { type: String, required: false },
    title: { type: String, required: false },
    thumbnailURL: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

CourseBought.pre("save", function preSave(next) {
  var course = this;
  course.updated_at = Date.now();
  next();
});

const CourseBoughtModel = mongoose.model(collectionName, CourseBought);
module.exports = CourseBoughtModel;
