'use strict';


// Usual Approach

        function foo(x, y, cb) {
            ajax(
                "http://some.url.1/?x=" + x + "&y=" + y,
                cb);
        }
        foo(11, 31, function (err, text) {
            if (err) {
                console.error(err);
            }
            else {
                console.log(text);
            }
        });



// Generator Based Approach

        function foo(x, y) {
            ajax(
                "http://some.url.1/?x=" + x + "&y=" + y, function (err, data) {
                    if (err) {
        // throw an error into `*main()` it.throw( err );
                    } else {
        // resume `*main()` with received `data`
                        it.next(data);
                    }
                });
        }
        function *main() {
            try {
                var text = yield foo(11, 31);
                console.log(text);
            }
            catch (err) {
                console.error(err);
            }
        }
        var it = main(); // start it all up!
        it.next();