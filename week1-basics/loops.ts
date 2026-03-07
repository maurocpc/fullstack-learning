const fruits: string[] = ["grape", "pineapple", "peach", "watermelon"];

// for...of loop - iterates over VALUES
for (const fruit of fruits) {
    console.log(`I like ${fruit}.`);
}

// for loop - used mainly when we need to know which position we're at
const scores: number[] = [85, 92, 78, 90, 88];

// Traditional for loop with index
for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1}: ${scores[i]}`);
}

// while loop - repeat until condition is false
let countdown = 5;

while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--; // Decrease by 1
}

console.log("Liftoff!");

// Array methods - TS favors them over manual loops
const numbers: number[] = [1, 2, 3, 4, 5];

// forEach - runs a function for each element
numbers.forEach((num) => {
    console.log(`Number: ${num}`);
});

// map - transforms each element and returns a new array
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// filter - keeps only elements that pass a test
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens);

// find - returns the first element that passes a test
const firstBig = numbers.find((num) => num > 3);
console.log("First number > 3:", firstBig);