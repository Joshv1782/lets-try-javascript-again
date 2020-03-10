/**
 * Day 6!
 */

/**
 * Let's See How Scope Works.
 */

var myVariable = 3; // Declared in GLOBAL scope.

function myFunction () {
    console.log( myVariable ); // Can we see myVariable in the function!? Yes! We can see GLOBALLY scoped variables inside of a function!

    var myFunctionScopeVariable = 64; // Declared in a local (function) scope.
}

myFunction(); // Let's run it and see.
console.log( myFunctionScopeVariable ); // Can we access it outside of the function!? No! Locally scoped variables will live and die in their function :(