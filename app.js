const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/v1', require('./routes'));


require('./mongo/config'); // run config file to connect to mongo db database

app.listen(PORT, () => console.log(`App running on port ${PORT}`));