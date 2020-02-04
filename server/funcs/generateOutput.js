function generateOutput(startUrl, endUrl, startPath, endPath) {
    
    // generate the ouput to send to the page

    var start = startUrl.slice(6);
    var copyStart = "";

    for(var i = 0; i < start.length; i++){
        if(start[i] == '_'){
            copyStart += ' ';
        } else {
            copyStart += start[i];
        }

    }

    var end = endUrl.slice(6);
    var copyEnd = "";
    for(var i = 0; i < end.length; i++){
        if(end[i] == '_'){
            copyEnd += ' ';
        } else {
            copyEnd += end[i];
        }
    }

    var output = copyStart;
    for(var i = 0; i < startPath.length; i++){
        output = output + '   ----->   ' + startPath[i][0]; 
    }
    for(var i = 1; i < endPath.length; i++){
        output = output + '   <-----   ' + endPath[i][0];
    }
    output = output + '   <-----   ' + copyEnd;

    return output;
}

module.exports = generateOutput;