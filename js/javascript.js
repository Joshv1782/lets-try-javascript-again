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

/**
 * Collecting elements.
 */

 // Get by ID:
var myHeading = document.getElementById( "my-heading" );
myHeading.title = "this is a heading.";
// myHeading.style.color = "darkgray"; // PLEASE avoid using inline styles... this is the CSS file's job!
myHeading.className = "grey-text"; // Use classes instead!

/**
 * Events!
 */

 // We can add event-listeners to a targeted element
 myHeading.addEventListener( "mouseover"/* Here we say which event we are targeting */,
 function ( event/*We can capture info about this event*/ ) {
 this.className = "salmon-text"; /* In an event, the "this" keyboard represents our element (myHeading). */
 } );

 // When you stop hovering...
 myHeading.addEventListener( "mouseleave", function ( event ) {
        this.className = "indigo-text";
 } );

  // When you stop hovering...
 myHeading.addEventListener( "click", function ( event ) {
    var bigClass = "big-text"; // Check if it already has it 
    if ( !this.className.includes( bigClass ) )
    this.className += " big-text "; // Concatenating a new class!
    // Remember, you must have a space between classes when assigning multiple.
 } );

 /**
  * Let's make a function!
  */

  // Function keyword, followed by the function name (and parameters if any are needed)
  function addTwoNumbers ( x, y )
  {
      x = Number( x ); // Enforce data-type (number)
      y = Number( y ); // Enforce data-type (number)
      return ( x + y ); // Add the two together
  }

  function currentDayString ()
  {
    var date = new Date();
      var dateString = "";
      dateString += date.getFullYear();
      dateString += ".";
      dateString += ( date.getMonth() + 1);
      dateString += "."
      dateString += ( date.getDay() + 1);
      return dateString;
  } 

  // Output to console.
  console.log( "The current date is: \r\n" + currentDayString() ); 
  // \r\n is return/newline - this will now output on TWO lines in your console.

  /**
   * Let's review some condidtions-rekated operators
   */

   // check for equivalency (type-agnostic)
   console.log( 1 == true ); // True
   console.log( "Hello, World!" == true ); // True
   console.log( -137 == true ); // Flase
   console.log( "test" == "test" ); // True
   console.log( 36 =="36" ); // True
   console.log( 0 == false ); // False
   console.log( "test string" == "test string")

   // check if identical (value comparison including type)
   console.log( 1=== true ); // False
   console.log( "" === true ); // Flase
   console.log( -137 == true ); // False
   console.log( "test" === "test" ); // True
   console.log( 36 ==="36" ); // Flase
   console.log( 0 === false ); // False

   /**
    * Hamburger menu
    */
   
    // Let's grab out menu...
  var MyNav = document.querySelector( "nav" );

  // And our menu button...
  var myNavButton = document.querySelector( ".menu-button" );

  // Let's listen for a click on this
  myNavButton.addEvenetListener( "click", function (event) {
      // When clicked, add/remove the "nav-open" class (in HTML)
    myNavButton.classList.toggle( "nav-open" );
  } );