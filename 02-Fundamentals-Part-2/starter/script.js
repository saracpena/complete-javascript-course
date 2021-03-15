function logger() {
    console.log("You've got this, Sara!");
}
// calling invoking running
//! these types of functions are used only when I want to reuse the block of code over and over again
// not returning a value, so we don't save the "result" to a variable
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0,10);
console.log(orangeJuice);

function taco(tortilla, protein){
    const tacoType = `I'd like a ${protein} burrito in a ${tortilla} tortilla`;
    return tacoType;
}
// console.log(taco('flour', 'chicken'));

const chickenBurrito = taco('flour','chicken');
console.log(chickenBurrito);

const beefBurrito = taco('corn', 'beef');
console.log(beefBurrito);


//TODO: FUNCTION DECLARATION: can be used before it's declared
function calcAge1(birthYear){
    return 2021 - birthYear;
}
//!must store function inside a var because it has a param/value/arg AND THEN, console it
calcAge1(1985);
//! Take 2: I can declare a function before defining it
const age = calcAge1(1985);
console.log(age);

//TODO: FUNCTION EXPRESSION/ANONYMOUS FUNCTION: a function without a name, a function value stored in a variable
    // function (birthYear)
//? completed:
    const calcAge2 = function(birthYear){
        return 2021 - birthYear;
    }
 const age2 = calcAge2(2000);
 console.log(age2);

//TODO: ARROW FUNCTION - shorter and faster to write ES6, NO 'this' keyword
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age4 = 2037 - birthYear;
    const retirement = 65 - age4;
    //return retirement; // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000, 'Lacey'));
console.log(yearsUntilRetirement(1985, 'Sara'));

//TODO FUNCTIONS CALLING OTHER FUNCTIONS

// must cut fruits into multiple smaller chunks to make juice
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}

console.log(fruitProcessor(2,3));

//! REVIEW FUNCTIONS
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName){
    const age4 = calcAge(birthYear);
    const retirement = 65 - age4;

    if(retirement > 0){
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement; 
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
    }

    //return retirement; 
    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement1(2000, 'Jonas'));
console.log(yearsUntilRetirement1(1965, 'Buddy'));

//! Try Exercise:

function calcAge0(birthYear, firstName) {
    const age1 = 2021 - birthYear;
    console.log(`${firstName} is ${age1} years old`);
    return age1;
}

const age1 = calcAge0(1985, 'Sara');