/**
 * Created by kishores on 01/05/16.
 */

var something = (function() {
    var nextVal;
    return {

// needed for `for..of` loops
        [Symbol.iterator]: function(){ return this; },


// standard iterator interface method
        next: function () {
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }
            return {done: false, value: nextVal};
        }
    }
})();

// console.log(something.next().value);
// console.log(something.next().value);
// console.log(something.next().value);





// From loop
for (var v of something) {
    console.log( v );
// don't let the loop run forever!
    if (v > 500) {
        break;
    }
}





// var a = [1,3,5,7,9];  // array's, also have default iterators:
//
// // The for..of loop asks a for its iterator, and automatically uses it to iterate over a's values.
//
// for (var v of a) {
//     console.log( v );
// }
// 1 3 5 7 9


