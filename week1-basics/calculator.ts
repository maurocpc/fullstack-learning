function calculate(a: number, b: number, operation: string): number {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero.");
            }
            return a / b;
        default:
            throw new Error("Please input a valid operation.");
    }
}

console.log(`Add: ${calculate(10, 5, "add")}`);
console.log(`Subtract: ${calculate(10, 5, "subtract")}`);
console.log(`Multiply: ${calculate(10, 5, "multiply")}`);
console.log(`Divide: ${calculate(10, 5, "divide")}`);
// console.log(`Invalid: ${calculate(10, 5, "any operation")}`);