'use strict';
function *something() {
    var nextVal;

    while (true) {
        if (nextVal === undefined) {
            nextVal = 1;
        }
        else {
            nextVal = (3 * nextVal) + 6;
        }
        yield nextVal;
    }
}


for (var v of something()) {
    console.log( v );

    // don't let the loop run forever!
    if (v > 500) {
        break
    }
}