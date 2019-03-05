var heightMark = 1.50; // Meters
var massMark = 50; // KG

var heightJohn = 1.75; // Meters
var massJohn = 80; // KG

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

var bmiHigherThanJohn = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + bmiHigherThanJohn);
