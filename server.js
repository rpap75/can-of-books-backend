'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const dataBase = mongoose.connection;
mongoose.connect(process.env.MONGO_URL);
dataBase.once('open', () => console.log('connected to mongo'));


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));


