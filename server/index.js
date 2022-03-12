const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./middleware/ErrorHandlerMiddleware');

// Database
const sequelize = require('./db');

async function connectDB() {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		console.log("Database success connected");
	} catch (e) {
		console.log(e);
	}
}
connectDB();

// Routes
const router = require('./routes/index');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(errorHandler);


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));

