require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const {
    SERVER_PORT
} = process.env;

const app = express();

app.use(express.static(__dirname + "/../build"));

app.use(cors());

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => console.log(`The server is currently running at port ${SERVER_PORT}`))