var bills = [124, 48, 268];
var tips = new Array();
var totalAmount = new Array();

function calculateTipAmount(billAmount) {
  var tip = 0;
  if (billAmount < 50) {
    tip = 20 / 100;
  } else if (billAmount >= 50 && billAmount <= 200) {
    tip = 15 / 100;
  } else if (billAmount > 200) {
    tip = 10 / 100;
  }

    return (billAmount * tip).toFixed(2);
}

function calculateTotalAmount(bill, tip) {
  return bill + tip;
}

for (i = 0; i < bills.length; i++) {
  tips.push(parseFloat(calculateTipAmount(bills[i])));
}

for (i = 0; i < bills.length; i++) {
  totalAmount.push(calculateTotalAmount(bills[i], tips[i]));
}

console.log(bills);
console.log(tips);
console.log(totalAmount);
