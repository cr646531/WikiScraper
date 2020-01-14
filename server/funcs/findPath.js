// find the path from the common page url back to the input page url

function findPath(commonPage, url, page) {

    var search = commonPage[1];
    var path = [];
    var curr;
    var visited = [];

    // loop until the search variable is the same as the input page url
    while(search !== url) {
    
        // is the url of the current page the same as the url of the input page
        curr = page.queue.find(element => element[1] == search && !visited.includes(element[1]));

        if(curr) {

            // set current page to be the next page in the queue
            path.unshift(curr);
            if(curr[2]) {
                search = curr[2];
            }

        } else {

            // is the url of the current page in the list of visited pages
            curr = page.visited.find(element => element[1] == search);
            
            // add the current page to the path
            if(curr) {
                // add the current page to the beginning of the path
                if(page.page == 'start') {
                    path.unshift(curr);
                // add the current page to the end of the path
                } else {
                    path.push(curr);
                }
                if(curr[2]) {
                    search = curr[2];
                }
            }
        }

        // add the current page to the list of visited pages
        visited.push(search);
    }

    // return the path from the common page url back to the input page url
    return path;

}

module.exports = findPath;