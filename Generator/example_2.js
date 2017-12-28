// generator function
function *generator (name) {
    console.log(name);    //Takes the param

    var name1 = yield 'Vetri';

    return name1 + name+ ', says hello';
}

// iterator object
var iterator = generator('Samir');

console.log(iterator.next());
console.log(iterator.next('Rajnikanth','Chennai'));