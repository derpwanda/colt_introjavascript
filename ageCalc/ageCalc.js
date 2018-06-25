var userAge = prompt("What is your age in years?");

var ageDays = userAge * 365;
var leapYears = userAge / 4;

var totalDays = ageDays - leapYears;

var finalAnswer = prompt(userAge + " years is roughly " + totalDays + " days.")

console.log(finalAnswer);
