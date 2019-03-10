var familyBillsJohn = {
  familyName: 'Smith',
  bills: [
    124, 48, 268, 180, 42
  ],
  calcTips: function() {
    this.tips = [];
    this.totalAmount = [];

    for (var i = 0; i < this.bills.length; i++) {

      var tipPercentage;
      var bill = this.bills[i];

      if (bill < 50) {
        tipPercentage = 20 / 100;
      } else if (bill >= 50 && bill <= 200) {
        tipPercentage = 15 / 100;
      } else if (bill > 200) {
        tipPercentage = 10 / 100;
      }

      this.tips[i] = Number((bill * tipPercentage).toFixed(2));
      this.totalAmount[i] = bill += this.tips[i];
    }
  },
  calculateAverageTip: function() {
    this.averageTip = calculateAverageTip(this.tips)
  }
};

var familyBillsMark = {
  familyName: 'Van Peeren',
  bills: [
    77, 375, 110, 45
  ],
  calcTips: function() {
    this.tips = [];
    this.totalAmount = [];

    for (var i = 0; i < this.bills.length; i++) {

      var tipPercentage;
      var bill = this.bills[i];

      if (bill < 100) {
        tipPercentage = 20 / 100;
      } else if (bill > 100 && bill < 300) {
        tipPercentage = 10 / 100;
      } else if (bill > 300) {
        tipPercentage = 25 / 100;
      }

      this.tips[i] = Number((bill * tipPercentage).toFixed(2));
      this.totalAmount[i] = bill += this.tips[i];
    }
  },
  calculateAverageTip: function() {
    this.averageTip = calculateAverageTip(this.tips)
  }
};

// Calculating average tip
function calculateAverageTip(tipArray) {
  var sum = 0;
  for (var i = 0; i < tipArray.length; i++) {
    sum += tipArray[i];
  }
  var averageTip = sum / tipArray.length;
  return Number(averageTip.toFixed(2));
}

familyBillsJohn.calcTips();
familyBillsJohn.calculateAverageTip()
console.log(familyBillsJohn);

familyBillsMark.calcTips();
familyBillsMark.calculateAverageTip()
console.log(familyBillsMark);

if (familyBillsJohn.averageTip > familyBillsMark.averageTip) {
  console.log('John has an higher average tip with: ' + familyBillsJohn.averageTip);
} else if (familyBillsMark.averageTip > familyBillsJohn.averageTip) {
  console.log('Mark has an higher average tip with: ' + familyBillsMark.averageTip);
} else {
  console.log('Both families give the same average tip.');
}
