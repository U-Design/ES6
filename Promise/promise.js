'use strict';
var fs = require("fs");


var reqName = "Vaibhav";



/*It Returns the promise to resolve or reject when read of file happens*/
function get(url) {

    var executor = function (resolve, reject) {

        fs.readFile(url, function (err, data) {

            if(err){
                reject(Error(err));
            }
            if(data && data.length){
                resolve(data);
            }
        });

    };

    return new Promise(executor);
}





var resolveFunOne = function (data) {
    if(data){
        var jsonData = JSON.parse(data);
    }
    console.log(jsonData , "--------------------from One");
    return jsonData;
};


var resolveFunTwo = function (data, name) {

    function findSomeone(Obj) {
        return Obj.name === name;
    };

    var nameData = data.find(findSomeone);
    console.log(nameData, "------------------------from two");
    return nameData;

};


var anotherasyncCall = function (name) {

    return get('./Data/details.json')
        .then(resolveFunOne)
        .then(function (data, name) {
            return resolveFunTwo(data, name)
        }).then(function (data) {
            return data["username"];
        });
    
};



var authoriseName = get('./Data/name.json')
                        .then(resolveFunOne)
                        .then(function (data) {
                           return resolveFunTwo(data,reqName);
                        })
                        .then(function (data) {
                            return anotherasyncCall(data.name);
                        });

