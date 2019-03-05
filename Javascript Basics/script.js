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
