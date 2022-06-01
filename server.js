// external
import express from 'express';

// internal
import connectDB from './db/connect.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (reg, res) => {
	throw new Error('Error');
	res.send('Welcome');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => console.log(port));
	} catch (err) {
		console.log(err);
	}
};

start();
