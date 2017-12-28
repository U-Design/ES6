'use strict';
function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
           // ···
            resolve(value); // success
           // ···
            reject(error); // failure
        });
}


asyncFunc()
    .then(function () {/* success */ }, function () {

    })
    .catch(error = function () {/* failure */ });


    
