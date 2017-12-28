'use strict';

var p1 = new Promise(function (resolve,reject) {
         // resolve(3);
            reject("Oops err");
});


p1.then(function (d) {
    console.log("1st");
}).then(function () {
    console.log("2nd");

}).catch(function (err) {
    console.log(err);
});