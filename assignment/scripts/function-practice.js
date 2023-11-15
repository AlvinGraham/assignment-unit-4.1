console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('Problem 1 ---------------');
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('Problem 2 ---------------');
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log ('Test - should say "Hello, Alvin!":', helloName('Alvin'));



// 3. Function to add two numbers together & return the result
console.log('Problem 3 ---------------');
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

// test - 3
console.log('Test Values 3 and 4 - should result in 7:', addNumbers(3, 4));



// 4. Function to multiply three numbers & return the result
console.log('Problem 4 ---------------');
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
 // twst - 4
console.log('Test Values 2, 3, and 6 - shout result in 36:', multiplyThree(2,3,6));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log('Problem 5 ---------------');
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test - Pass a positive value of 8 - Should return true', isPositive(8));
console.log('Test - Pass a positive value of 0 - Should return false', isPositive(0));
console.log('Test - Pass a negative value of -3 - Should return false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('Problem 6 ---------------');
function getLast(array) {
  let lastItem;
  // console.log('Array in getLast function', array);
  if (array.length === 0) {
    lastItem = undefined;
  } else {
    lastItem = array[array.length - 1];
  }
  return lastItem;
  
  // Or as a single line of code ...
  // return (array.length === 0) ? undefined : array[array.length - 1];
  
}

// test - 6
let testArray = ['Dog', 'Fish', 'Cat', 'Gerbil'];
console.log('Test - Pass testArray to getLast function. Result should be "Gerbil":', getLast(testArray));
testArray = [];
console.log('Test - Pass empty testArray to getLast function. Result should be undefined:', getLast(testArray));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('Problem 7 ---------------');
function find(value, array) {
  found = false;
  for (let x of array) {
    if (x === value) {
      found = true;
      break;
    }
  }
  return found;
}

// test - 7
testArray = ['Dog', 'Fish', 'Cat', 'Gerbil'];
console.log('Test - Pass testArray to find function with "Cat". Result should be true:', find('Cat', testArray));
console.log('Test - Pass testArray to find function with "Elephant". Result should be false:', find('Elephant', testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('Problem 8 ---------------');
function isFirstLetter(letter, string) {
  // Alternate code to make function case tolerant
  // return ((string.charAt(0)).toUpperCase() === letter.toUpperCase()) ? true : false;
  if ((string.charAt(0)).toUpperCase() === letter.toUpperCase()) {
    return true;
  }
  return false
}

// test - 8
const testString = 'The cow jumoed over the moon';
console.log('Test - Pass char "T" to function with test string.  Result should be true:', isFirstLetter('T', testString));
console.log('Test - Pass char "N" to function with test string.  Result should be false:', isFirstLetter('N', testString));
console.log('Test - Pass char "t" to function with test string.  Result should be false:', isFirstLetter('t', testString));

// 9. Function to return the sum of all numbers in an array
console.log('Problem 9 ---------------');
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let num of array) {
    sum += num;
  }
  // TODO: return the sum
  return sum;
}

// test - 9 
let numbersArray = [ 6, 0, -1, 42, 8];
console.log('Test - Pass numberArrat to sumAll function.  Result should be 55:', sumAll(numbersArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('Problem 10 ---------------');
function allPositive(inputArray) {
  let outputArray = [];
  for (let arrayElement of inputArray) {
    if (arrayElement > 0) {
      outputArray.push(arrayElement);
    }
  }
  return outputArray;
}

// test - 10
console.log('Testing array against allPositive Function:');
console.log('inputArray:', numbersArray);
console.log('After passing through allPositive function (expect 3 positive values) (returned array)', allPositive(numbersArray));
console.log('inputArray after function execution(expect unchanged):', numbersArray);

console.log('Testing array against allPositive Function with all non-positve array input:');
numbersArray = [ -6, 0, -1, -42, -8];
console.log('inputArray:', numbersArray);
console.log('After passing through allPositive function (expect empty array(returned array)', allPositive(numbersArray));
console.log('inputArray after function execution(expect unchanged):', numbersArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('Problem 11 ---------------');

/* Product of Digits of Sum
Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. 
The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, 
until the product is only 1 digit long. Return the final product.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2 */

function sumDigProd () {     // leaving paramaters blank to facilitate dymanic number of arguments
  
  if ((arguments[0] === 0) && arguments.length === 1) {  // resolve unique case where argument is 0
    return 0;
  }
  
  // add digits together
  let sum = 0;
  for (x = 0; x < arguments.length; x++) { // obtain sum of arguments
    // console.log('argument:',arguments[x])
    sum += arguments[x];
    // console.log(sum);
  }



  let product; // intialize product variable
  let sumString = (sum.toString()).split('');  // set sumString to array containing digits
  // console.log(sum.toString(), sumString);

  do {                // I want this block to execute at least one time hence the do .. while
    product = 1;      // reset product to unity
    for (let x of sumString) { // create product of digits
      product *= x;
    }
    // console.log (product);
    sumString = (product.toString()).split('');
    // console.log ('sumString in while', sumString, 'product in while', product);
  } while (product > 9) // continue loop until product is only 1 digit
    
return product;

}

console.log('sumDigProd(16, 28):',sumDigProd(16, 28));
console.log('sumDigProd(0):',sumDigProd(0));
console.log('sumDigProd(1, 2, 3, 4, 5, 6):', sumDigProd(1, 2, 3, 4, 5, 6));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
