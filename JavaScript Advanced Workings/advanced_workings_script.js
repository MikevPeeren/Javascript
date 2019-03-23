/*****************************************/
/********* Function Constructor **********/
/*****************************************/

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'Teacher',
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1991, 'Teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

/*****************************************/
/************* Object Create *************/
/*****************************************/

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1991;
john.job = 'Teacher';

var jane = Object.create(personProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1969
  },
  job: {
    value: 'Designer'
  }
});

/***************************************************/
/************** Primitives vs Objects **************/
/***************************************************/

// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: 'Mike',
  city: 'Tilburg'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

/************************************************************/
/************** Passing Functions as Arguments **************/
/************************************************************/

var years = [1990, 1865, 1965, 1937, 2005, 1998];

function arrayCalc(array, fn) {
  var arrRes = [];
  for (i = 0; i < array.length; i++) {
    arrRes.push(fn(array[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

/************************************************************/
/************** Functions returning Functions ***************/
/************************************************************/

function interviewQuestion(job) {
  if (job === 'Designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'Teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello ' + name + ' what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('Teacher');
var designerQuestion = interviewQuestion('Designer');
teacherQuestion('John')
designerQuestion('John')
designerQuestion('Mark')

interviewQuestion('Teacher')('Mark');

/************************************************************/
/**************************** IIFE **************************/
/********* Immediately Invoked Function Expressions *********/
/************************************************************/

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();

(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

/************************************************************/
/************************** Closures ************************/
/************************************************************/

function retirement(retirementAge) {
  return function(yearOfBirth) {
    var a = ' years left until retirement.'
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

retirement(66)(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'Designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'Teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ' what do you do?');
    }
  }
}

interviewQuestion('Designer')('John');
interviewQuestion('Teacher')('Mark')
interviewQuestion('test')('Mike');


/************************************************************/
/******************** Bind Call and Apply *******************/
/************************************************************/

var john = {
  name: 'John',
  age: 26,
  job: 'Teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'Designer',
}

john.presentation('formal', 'morning')
john.presentation.call(emily, 'friendly', 'afternoon')
// john.presentation.apply(emily,['friendly', 'afternoon'])

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('midnight');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1865, 1965, 1937, 2005, 1998];

function arrayCalc(array, fn) {
  var arrRes = [];
  for (i = 0; i < array.length; i++) {
    arrRes.push(fn(array[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(fullJapan);
console.log(ages);
