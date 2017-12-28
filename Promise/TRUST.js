'use strict';

// Calling Too Early
//
//         var promise1 = (new Promise(function(resolve){
//                                 console.log("Resolved")
//                                 resolve(42);
//                         }) );
//
//
//         promise1.then(function () {
//            console.log("Called on Time");
//         });


// Calling Too Late

        // var promise2 = (new Promise(function(resolve){
        //                          console.log("Resolved")
        //                          resolve(42);
        //                  }) );
        //
        // promise2.then(function () {
        //     console.log("a");
        //
        //     promise2.then(function () {
        //         console.log("c");
        //     })
        // });
        //
        // promise2.then(function () {
        //     console.log("b");
        // });

//Never Calling the Callback

    //a utility for timing out a Promise
        function timeoutPromise(delay) {
            return new Promise( function(resolve,reject){
                setTimeout( function(){
                    reject( "Timeout!" );
                },delay);
            });
        }

        function foo() {
            return new Promise( function(resolve,reject){
                    resolve( "Foo!" );
            });
        }

    //setup a timeout for `foo()`
        Promise.race( [
            foo(),
            timeoutPromise( 3000 )
        ]).then(

            function (data) {
                console.log(data);
            },
            function(err){
                console.log(err);
            }
        );


