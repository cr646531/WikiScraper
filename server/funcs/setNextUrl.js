function setNextUrl(curr) {

    var flag = 1;
    var next;
    var url;

    // find the next link that has NOT already been visited
    while(flag) {
        next = curr.queue.shift();
        flag = curr.visited.find(element => element[1] == next[1]);
    }

    // add this link to the array of visited sites so we don't go there again
    curr.visited.push(next);
    console.log(next);

    // set the next URL to be visited
    curr.url = 'https://en.wikipedia.org' + next[1];

    return next;
}

module.exports = setNextUrl;