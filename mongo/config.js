const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB_URI;
mongoose.connect(URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.on("error", (err) => {
	console.log(`Error on DB connection: ${err}`);
});
mongoose.connection.on("connected", (res) => {
	console.log("Connected to MongoDB");
});