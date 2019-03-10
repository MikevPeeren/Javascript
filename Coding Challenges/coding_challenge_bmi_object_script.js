var john = {
  firstName: 'John',
  lastName: 'Smith',
  generateFullName: function() {
    this.fullName = this.firstName + this.lastName;
  },
  mass: 80,
  height: 1.75,
  calcBmi: function() {
    bmi = this.mass / (this.height * this.height);
    this.bmi = Number((bmi).toFixed(2))
  }
}

var mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  generateFullName: function() {
    this.fullName = this.firstName + this.lastName;
  },
  mass: 50,
  height: 1.50,
  calcBmi: function() {
    bmi = this.mass / (this.height * this.height);
    this.bmi = Number((bmi).toFixed(2))
  }
}

john.generateFullName();
john.calcBmi();

console.log(john);

mark.generateFullName();
mark.calcBmi();

console.log(mark);

if (mark['bmi'] > john['bmi']) {
  console.log("Mark's BMI is higher than John's");
} else if (john['bmi'] > mark['bmi'])) {
  console.log("John's BMI is higher than Mark's");
} else {
  console.log("They have the same BMI");
}
