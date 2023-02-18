const express = require('express');
const app = express();
const axios = require('axios');

const cors = require('cors');

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());

console.log('hello');

app.use('/', async (req, res) => {
    const response = await axios.get('http://127.0.0.1:5555/');
    console.log(response.data);
})

app.use('/data', async (req, res) => {
    
})

module.exports = app;