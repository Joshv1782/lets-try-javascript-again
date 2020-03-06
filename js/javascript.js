// alert( 'Hello, World! ');      Testing

// Lets try Javascript, again! Testing JavaScript
// Multiline comment
// @git https://github.com/TECHCareers-by-Manpower/ wb-lets-try-jacascript-again.git
// @link https://github.com/TECHCareers-by-Manpower/ wb-lets-try-jacascript-again

// Basic assignment:    **** Console tab ****
var myVariable = '38.9587';
console.log( myVariable +5 ); // oop, one of these is a string so plus is concatenating!

myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained. Is now a numeric.
console.log( myVariable); // Is now a numeric value.

myVariable = parseInt( myVariable ); // converted to integer, decimal removed.
console.log( myVariable ); // 38

myVariable = Number( myVariable ); // Converted to any number type it can.
console.log( myVariable ); // No change here. 

myVariable = myVariable +5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
console.log( myVariable );

myVariable = myVariable.toString(); // Convert back to a string.
console.log( myVariable );

/**
 * Other types?
 */

var myArrayOfDataTypes = [
    // Booleans:
    true,
    false,
    // Null
    null,
    // Number (float/integer):
    34,
    168.793,
    // String:
    "Hello, World!",
    //Value not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
];

/**
 * Creating elements for webpage
 */

 // Create datalist.
 var myDataList = document.createElement( "DL"); // Wont show yet! We didn't tell it where to go.

 // Let's loop through the array so we don't havr to type out each item!
for ( var i = 0; i < myArrayOfDataTypes.length; i++ )
{ // ( Assignmnt; Termination condition; iteration )
  // Create datalist title

 // Create dadtalist title.
 var dataListTitle = document.createElement( "DT" );
 dataListTitle.textContent = typeof myArrayOfDataTypes[i]; // Output the datatype

 // Create datalist data
 var dataListData = document.createElement( "DD" );
 dataListData.textContent = myArrayOfDataTypes[i];

 // Add our new elements to our datalist
 myDataList.appendChild( dataListTitle );
 myDataList.appendChild( dataListData );

}
var myHeadingText = "Our Data-Type:"; 
// This is adding HTML to the end of our body.
document.body.innerHTML += `<!-- Back icks are used in JS for multi-line strings -->
    <h2>
        `+myHeadingText /*Concatenating strings!*/+`
    </h2>
`;

// Add ALL of that to the body! We should be able to see it now!
document.body.appendChild( myDataList );
