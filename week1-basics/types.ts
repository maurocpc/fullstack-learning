// String - text data
const firstName: string = "Mauro";
const lastName: string = 'Cruz';  // single or double quotes both work
const fullName: string = `${firstName} ${lastName}`;  // template literal

// Number - integers and decimals (no separate "int" or "float" type)
const age: number = 51;
const price: number = 19.99;
const temperature: number = -5;

// Boolean - true or false
const isStudent: boolean = false;
const hasLicense: boolean = true;

// Print everything
console.log("Name:", fullName);
console.log("Age:", age);
console.log("Price:", price);
console.log("Temperature:", temperature);
console.log("Is student?", isStudent);
console.log("Has license?", hasLicense);

// undefined - variable declared but not assigned
let notYetAssigned: string;
// console.log("Not assigned:", notYetAssigned);

// null - intentional absence of value
const noValue: null = null;
console.log("No value:", noValue);

// any - escape hatch (avoid this in real code)
let anything: any = "text";
anything = 42;
anything = true;
console.log("Anything:", anything);