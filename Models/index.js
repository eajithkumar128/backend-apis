const mongoose = require('mongoose');
const MONGO_DB_URL = process.env['MONGO_DB_URL'];
const DB_NAME = process.env['DB_NAME'];

console.log(process.env);
let database = {
	connect: async function () {
		await mongoose.connect(MONGO_DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: DB_NAME,
			useFindAndModify: false,
		});
		console.log('connected successfull to database');
	},
};

module.exports = database;
