// Functions at the top, execution logic at the bottom.

function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

function calculateAge(birthYear: number, currentYear: number): number {
    return currentYear - birthYear;
}

function introduce(name: string, birthYear: number, currentYear: number): string {
    const age = calculateAge(birthYear, currentYear);
    return `My name is ${name} and I'm ${age} years old.`
}

const userName = "Mauro";
const birthYear = 1975;
const currentYear = 2026;

console.log(greet(userName));
console.log(introduce(userName, birthYear, currentYear));