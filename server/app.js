const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = app;


app.get('/', async (req, res) => {
    res.send('test');
});