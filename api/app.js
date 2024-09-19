require('dotenv').config();
const cors = require('./middlewares/cors.middleware');

const express = require('express');
require('./configs/db.config');
const app = express();

app.use(express.json());
app.use(cors)

app.use('/api', require('./configs/routes.config'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App runnning at port ${port}`));