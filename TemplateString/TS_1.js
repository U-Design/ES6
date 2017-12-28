/**
 * Created by kishores on 01/05/16.
 */
var name = "Samir",
    thing = "party";

// var greet =  "hi, my name is "+ name +"and I like to " + thing +".";
//
// // too much messy
// console.log(greet);


function namegen() {
    return "Sam";
}



var greet_TS = `hi, my name is ${namegen} and I like to ${thing}!`;

console.log(greet_TS);