const mongoose = require('mongoose');
const collectionName = 'User';

const User = mongoose.Schema({
	username: { type: String, unique: true, required: true },
	hash: { type: String, required: true },
	name: { type: String },
});

User.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.hash;
	},
});

User.pre('save', function preSave(next) {
	var blog = this;
	blog.updated_at = Date.now();
	next();
});

const userModel = mongoose.model(collectionName, User);
module.exports = userModel;
