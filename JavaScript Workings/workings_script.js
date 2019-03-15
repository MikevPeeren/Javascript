/*****************************************/
/*********** Lecture: Hoisting ***********/
/*****************************************/

// Functions
calculateAge(1965);

function calculateAge(year) {
  console.log(2016 - year);
}

calculateAge(1990);

// This will not work
// retirement(1990);

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

retirement(1990);

// Variables
console.log(age);
var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);

/*****************************************/
/************ Lexical Scoping  ***********/
/*****************************************/

// Scope Chain.
var a = 'Hello';
first();

function first() {
  var b = 'Hi';
  second();

  function second() {
    var c = 'Hey'
    console.log(a + b + c);
  }
}

/********************************************************/
/************ Execution Stack vs Scope Chain  ***********/
/********************************************************/

var a = 'Hello';
first();

function first() {
  var b = 'Hi';
  second();

  function second() {
    var c = 'Hey';
    third();
  }
}

function third() {
  var d = 'John';
  // This does not work because this function has no clue what is in the First and Second function
  //console.log(c);
  console.log(a + d);
}

/********************************************************/
/****************** The 'This' Keyword  *****************/
/********************************************************/

//console.log(this);

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  // Window object
  console.log(this);
}

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    // John object
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction() {
      // Windows object
      console.log(this);
    }
    innerFunction();
  }
}

john.calculateAge();

var Mike = {
  name: 'Mike',
  yearOfBirth: 1991
}

mike.calculateAge = john.calculateAge;
