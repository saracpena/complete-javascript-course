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
