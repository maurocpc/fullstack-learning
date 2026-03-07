const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Mauro", "Ana", "Meg"];
const mixed: (string | number)[] = ["Ana", 43, "Meg", 50];

// Access elements by index (starts at 0)
console.log("First number:", numbers[0]);   // 1
console.log("First name:", names[1]);       // Ana
console.log("Last number:", numbers[4]);    // 5

// Array length
console.log("Total numbers:", numbers.length);  // 5

// Add to the end
numbers.push(6);
console.log("After push:", numbers);

// Remove from the end
const removed = numbers.pop();
console.log("Removed:", removed);
console.log("After pop:", numbers);

// Add to the beginning
numbers.unshift(0);
console.log("After unshift:", numbers);

// Remove from the beginning
const first = numbers.shift();
console.log("Removed first:", first);
console.log("After shift:", numbers);