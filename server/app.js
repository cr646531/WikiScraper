const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');
const funcs = require('./funcs');
const { createQueue, setNextUrl } = funcs.helperFuncs;

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

    var start = {
        page: 'start',
        url: 'https://en.wikipedia.org/wiki/History',
        queue: [],
        visited: []
    };

    var end = {
        page: 'end',
        url: 'https://en.wikipedia.org/wiki/Physics',
        queue: [],
        visited: []
    }

    var temp;
    var curr = start;
    var flag = true;


    while(flag) {

        // grab the html for the start page
        var $ = await fetchData(curr.url);

        // create array of all the paragraphs on the page
        var paragraphs = $('p', '.mw-parser-output');

        // use the paragraphs array to find the links and add them to the queue
        temp = createQueue(paragraphs, curr.url);
        curr.queue = curr.queue.concat(temp);

        var next = setNextUrl(curr);

        if(curr.page == 'start') {
            curr = end;
        } else {
            curr = start;
        }

        // check to see if the link is in the other queue 
        check = curr.queue.find(element => element[1] == next[1]);

        // if the link was in the end queue, then we have discovered a common path
        if(check){
            console.log(`\n\n\n\n${check}`);
            // break the loop - we have finished traversing pages
            flag = false;
        }
        
    }

    
    res.send('done');

});