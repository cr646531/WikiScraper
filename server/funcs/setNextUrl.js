function setNextUrl(queueOne, visited) {

    var flag = 1;
    var next;
    var url;

    // find the next link that has NOT already been visited
    while(flag) {
        next = queueOne.shift();
        flag = visited.find(element => element[1] == next[1]);
    }

    // add this link to the array of visited sites so we don't go there again
    visited.push(next);
    console.log(next);

    // set the next URL to be visited
    url = 'https://en.wikipedia.org' + next[1];

    var output = {
        queue: queue,
        visited: visited,
        url: url
    }

    return output;
}

module.exports = setNextUrl;