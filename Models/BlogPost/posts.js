const mongoose = require("mongoose");
const collectionName = "blog_post";

const BlogPost = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    thumbnailURL: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

BlogPost.pre("save", function preSave(next) {
  var blog = this;
  blog.updated_at = Date.now();
  next();
});

const BlogPostModel = mongoose.model(collectionName, BlogPost);
module.exports = BlogPostModel;
