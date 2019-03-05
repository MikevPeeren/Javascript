var heightMark = 1.50; // Meters
var massMark = 50; // KG

var heightJohn = 1.75; // Meters
var massJohn = 80; // KG

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
