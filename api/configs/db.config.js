const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => console.info(`Connected to the database`))
    .catch(error => console.error('Database connection error:', error));