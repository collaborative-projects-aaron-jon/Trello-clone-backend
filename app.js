const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1', require('./routes'));


require('./mongo/config'); // run config file to connect to mongo db database

app.listen(PORT, () => console.log(`App running on port ${PORT}`));