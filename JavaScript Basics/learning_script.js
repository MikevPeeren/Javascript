/*****************************************/
/******* Variables and Data types. *******/
/*****************************************/

console.log('Kurwa!');
var firstName = 'Robert';
var lastName = 'Roubos';
var age = 25;
var fullAge = false;
var job;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(fullAge);
console.log(job);

job = 'Developer';
console.log(job);

var $years = 3;


/*****************************************/
/* Variables mutation and type coercion. */
/*****************************************/

var firstName = 'Robert';
var lastName = 'Roubos';
var age = 25;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Developer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
// age = 'Twenty Five';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/*****************************************/
/************* Basic Operators. **********/
/*****************************************/

var year, yearRobert, yearJordi;
year = 2018

ageRobert = 25;
ageJordi = 30;

yearRobert = year - ageRobert;
yearJordi = year - ageJordi;

// Math Operators
console.log(yearRobert);
console.log(yearJordi);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical Operators
var robertOlder = ageRobert > ageJordi;
console.log(robertOlder);

// Typeof Operator
console.log(typeof robertOlder);
console.log(typeof ageRobert);
console.log(typeof 'Robert is Ouder');

var x;
console.log(typeof x);

/*****************************************/
/********** Operator Precendence. ********/
/*****************************************/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence //

var now = 2018;
var yearRobert = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearRobert >= fullAge;
console.log(isFullAge);

// Grouping
var ageRobert = now - yearRobert;
var ageJordi = 30;
var average = (ageRobert + ageJordi) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x *= 2
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

/*****************************************/
/********** If / Else Statements. ********/
/*****************************************/

var firstName = 'Youri';
var civilStatus = 'single';

if ('married' === civilStatus) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

/*****************************************/
/************* Boolean Logic. ************/
/*****************************************/

var firstName = 'Bart'
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (13 <= age && 20 > age) {
  console.log(firstName + ' is a teenager.');
} else if (20 <= age && 30 > age)
  console.log(firstName + ' is a young man.');
else {
  console.log(firstName + ' is a man.');
}

/*********************************************************************/
/************* The Ternary Operator and Switch Statements  ***********/
/*********************************************************************/

var firstName = 'Mike'
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
  var drink = 'beer';
} else {
  var drink = 'juice';
}

var job = 'Developer'

switch (job) {
  case 'Developer':
    console.log(firstName + ' Develops');
    break;
  case 'Driver':
    console.log(firstName + ' Drives a Uber');
    break;
  case 'Designer':
    console.log(firstName + ' Degins');
    break;
  case 'Instructor':
  case 'Teacher':
    console.log(firstName + ' Teaches kids');
    break;
  default:
    console.log(firstName + ' does something else.');
}

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;
  case 13 <= age && 20 > age:
    console.log(firstName + ' is a teenager.');
    break;
  case 20 <= age && 30 > age:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}


/*********************************************************************/
/************ Truthy and Falsy values and equality operatos **********/
/*********************************************************************/

// Falsy values: undefined, null, 0, '', containing
// Truthy values: not Falsy values

var height = 'twenty';

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality Operators
if (height === '23') {
  console.log('The == operator does not type coercion!');
}

/*********************************************************************/
/************************ Functions **********************************/
/*********************************************************************/

function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageMonika = calculateAge(1991);

console.log(ageJohn, ageMike, ageMonika);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year)
  var retirement = 70 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1991, 'Monika');

/*********************************************************************/
/************** Function Statements and Expressions ******************/
/*********************************************************************/

// Function declaration
// Function whatDoYouDo(job, firstName){}

// Function Experession
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drvies an Uber.'
    case 'designer':
      return firstName + ' designs beautifull websites'
    default:
      return firstName + ' does something else'
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Monika'));
console.log(whatDoYouDo('retired', 'Mark'));

/*********************************************************************/
/****************************** Arrays *******************************/
/*********************************************************************/

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben'
console.log(names);
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', 'false'];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

john.push('designer');
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

/*********************************************************************/
/********************* Objects and Properties ************************/
/*********************************************************************/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: [
    'Jane', 'Joe', 'Mark', 'Emily'
  ],
  job: 'teacher',
  isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear'
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane'
jane.birthYear = 1991;
jane['lastName'] = 'Smith';
console.log(jane);

/*********************************************************************/
/************************ Objects and Methods ************************/
/*********************************************************************/

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1993,
  family: [
    'Jane', 'Joe', 'Mark', 'Emily'
  ],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2018 - this.birthYear;
  }
};
john.calcAge()
console.log(john);

/*********************************************************************/
/************************ Loops and Iteration ************************/
/*********************************************************************/

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break Statements
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
