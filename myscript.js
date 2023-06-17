//primitive type values are stored on the stack and a copy of the value is made

// let scoreOne = 100;
// let scoreTwo = scoreOne;

// console.log(`score one: ${scoreOne} score two: ${scoreTwo}`);

// scoreOne = 1000;

// console.log(`score one: ${scoreOne} score two: ${scoreTwo}`);


//references types
// variable is created on the stack but it's value is a reference to 
// an object on the heap (so not on the stack) 

const fPlayerOne = {name:'rashford', age: 23};
const fPlayerTwo = fPlayerOne;

console.log(fPlayerOne, fPlayerTwo);

fPlayerOne.age = 25;

console.log(fPlayerOne, fPlayerTwo);

//both change as the object is only stored once on the heap
//when compared to primitive values being stored on the stack
//so when change the property value of playerOne, playerTwo is also updated
// as both refer to the same object on the heap 
// if was a primitive value then each value would be stored independently on the stack
