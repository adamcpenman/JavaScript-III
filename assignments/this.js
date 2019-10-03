/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. refers to how this is the global scope,  the this keyword will console the window Object.
* 2. Using the dot syntax, whatever is to the left is this.
* 3.  The "new" keyword helps create a new object in a constructor function
* 4. When the .call or .apply methods are used, we are using the "this" method explicitly 
*
* write out a code example of each explanation above
*/

// Principle 1
function myDog (name){
console.log(this)
return name;
}
myDog("Nora");

// code example for Window Binding

// Principle 2
const myDoggie = {
    name: "Nora",
    food: "chicken",
    speak: function() {
        return `${this.name} woofs for ${this.food}`;
    }
}
console.log (myDoggie.speak());
// code example for Implicit Binding

// Principle 3
function Hpotter (character, house) {
    this.character = character,
    this.house = house,
    this.speak = function () {
        console.log(`I am ${this.character} and I am in house ${this.house}.`);
    }
}

const harry = new Hpotter ('Harry', 'Gryffindor');
const ron = new Hpotter ("Ron", "Gryffindor");
harry.speak();
ron.speak();

// code example for New Binding

// Principle 4

// code example for Explicit Binding
function DragQueens (name, season) {
    this.name = name;
    this.season = season; 
}

function Queens(name, season) {
    DragQueens.call (this, name, season);
    console.log (`${this.name} was on season ${this.season}`);
}

console.log(new Queens('Alaska', 5));

harry.speak.apply(ron);
ron.speak.call(harry);
