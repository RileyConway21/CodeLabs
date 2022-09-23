// ** Scope **
// Accessibility of variables

// Global Scopes
// These variables are visible through the entire script/program
let x = 0;

// Local Scopes/inner scope/block scope
// A local scope has access to its own variables as well its outer
//  scope variables. It does not have access to its inner scope.

//  Examples
// functions, conditional statements, classes, loops, ect

function logToConsole() {
    let y = 0;
    console.log(x, y);
}

logToConsole();

console.log(y);