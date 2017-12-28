'use strict';


//Promise-aware Function

function foo(x, y) {
    return request(
        "http://some.url.1/?x=" + x + "&y=" + y);
}




/*
* It should listen for the promise to resolve (fulfillment or rejection),
* and then either resume the generator with the fulfillment message or
* throw an error into the generator with the rejection reason.
* */

function *main() {
    try {
        var text = yield foo(11, 31);
        console.log(text);
    }
    catch (err) {
        console.error(err);
    }
}



var it = main();
var p = it.next().value;


// wait for the `p` promise to resolve
p.then(function (text) {
        it.next(text);
    },
    function (err) {
        it.throw(err);
    });
