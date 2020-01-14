const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');
const { createQueue } = require('./funcs.js');

module.exports = app;

/* Helper Function */

const fetchData = async (url) => {
    const result = await axios.get(url);
    return cheerio.load(result.data);
};

/* Routes */

app.get('/', async (req, res) => {
    res.send('test');
});

app.get('/links', async (req, res) => {
    var startUrl = 'https://en.wikipedia.org/wiki/History';
    var endUrl = 'https://en.wikipedia.org/wiki/Physics';

    var startQueue = [];
    var endQueue = [];
    var temp;
    
    // grab the html for the start page
    var $ = await fetchData(startUrl);

    // create array of all the paragraphs on the page
    var paragraphs = $('p', '.mw-parser-output');

    // use the paragraphs array to find the links and add them to the queue
    temp = createQueue(paragraphs, startUrl);
    startQueue = startQueue.concat(temp);

    // grab the html for the destination page
    var $ = await fetchData(endUrl);

    // create an array of all the paragraphs on the page
    var paragraphs = $('p', '.mw-parser-output');

    // use the paragraphs array to find the links on the page and add them to the queue
    var temp = createQueue(paragraphs, endUrl);
    endQueue = endQueue.concat(temp);

    
    res.send(endQueue);

});