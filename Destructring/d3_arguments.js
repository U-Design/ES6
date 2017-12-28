/**
 * Created by kishores on 01/05/16.
 */

// function calcBmi( weight, height, max, callback) {
//     var bmi = weight / Math.pow(height, 2);
//     if(bmi> max){
//         console.log("You're overweight")
//     }
//     if(callback){
//         callback(bmi);
//     }
// }
// // calcBmi(weight, height, 25);
// calcBmi(weight, height, null, function () { console.log("CB")});

// argument order is a necessity


// 1) Solution

// function calcBmi( opts) {
//     var bmi = opts.weight / Math.pow(opts.height, 2);
//     if(opts.bmi> opts.max){
//         console.log("You're overweight")
//     }
//     if(opts.callback){
//         opts.callback(bmi);
//     }
// }
// calcBmi({weight: 84, height:172, max:25});
// calcBmi({weight: 84, height:172, callBack:function () {console.log("CB")}});







// Using destructuring


function calcBmi( { weight, height, max=25, callback } ) {
    let bmi = weight * 10000 / Math.pow(height, 2);
    if(bmi> max){
        console.log("You're overweight")
    }
    if(callback){
        callback(bmi);
    }
}
calcBmi( { weight : 70, height: 172, max : 25 } );
calcBmi( { weight : 82, height : 172, callback : function (){console.log("hi from callback")} } );










