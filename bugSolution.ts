function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number | string {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    return "Error: Invalid Input";
  }
}

let result1 = addSafe(1, 2); // Correct usage: returns 3
let result2 = addSafe(1, "2"); // Handles string input
let result3 = addSafe("1", 2); // Handles string input
let result4 = addSafe("1", "2"); // Handles string input
console.log(result1, result2, result3, result4); // Output 3, Error: Invalid Input, Error: Invalid Input, Error: Invalid Input