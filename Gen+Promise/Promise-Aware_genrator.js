'use strict';

function run(gen) {


    var args = [].slice.call(arguments, 1), it;


    // initialize the generator in the current context
    it = gen.apply(this, args);


    // return a promise for the generator completing
    return Promise.resolve()

        .then(function handleNext(value) {

                // run to the next yielded value
                var next = it.next(value); /// foo

                return (function handleResult(next) {

                    // generator has completed running?
                    if (next.done) {
                        return next.value;
                    }

                    // otherwise keep going
                    else {
                        return Promise.resolve(next.value)
                            .then(

                                // resume the async loop on
                                // success, sending the resolved
                                // value back into the generator
                     /*Success*/ handleNext,


                                // if `value` is a rejected
                                // promise, propagate error back
                                // into the generator for its own
                                // error handling

                    /*Error*/    function handleErr(err) {
                                    return Promise.resolve(it.throw(err)
                                    )
                                        .then(handleResult);
                                }
                            );
                    }
                })(next);
            }
        )
};


function *foo() {

// make both requests "in parallel"
    var p1 = request("http://some.url.1");
    var p2 = request("http://some.url.2");

// wait until both promises resolve
    var r1 = yield p1;
    var r2 = yield p2;
    var r3 = yield request("http://some.url.3/?v=" + r1 + "," + r2);
    console.log(r3);
}
run(foo);








function *foo1() {

// make both requests "in parallel," and
// wait until both promises resolve

    var results = yield Promise.all([

        request("http://some.url.1"),
        request("http://some.url.2")

    ]);

    var [r1,r2] = results;  // ES6 destructuring assignment   :)

    var r3 = yield request("http://some.url.3/?v=" + r1 + "," + r2);

    console.log(r3);
}


// use previously defined `run(..)` utility
run(foo1);


