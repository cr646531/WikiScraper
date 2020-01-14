const express = require('express');
const app = express();

module.exports = app;


app.get('/', async (req, res) => {
    res.send('test');
});