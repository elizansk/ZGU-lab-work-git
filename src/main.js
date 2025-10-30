console.log("Hello, World!");

function add(a, b) {
    return a + b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: division by zero!";
    }
    return a / b;
}
function multiply(a, b) {
    return a * b;
}


console.log("2 + 3 =", add(2, 3));
console.log("Result of multiplication:", multiply(2, 3));
console.log("Result of division:", divide(10, 2));