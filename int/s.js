function Animal(age, name) {
    var age = age;
    this.name = name;
}
// Animal.prototype.name = 'sa';
Animal.prototype.displayName = function () {
    console.log(this.name);
};


// let cat = new Animal(3, 'cat');
//
// cat.displayName();

function Dog(age, name) {
    Animal.call(this, age, name);
}

Dog.prototype = Animal.prototype;


let dog = new Dog(3, 'cat');
console.log(dog.name);
dog.displayName();