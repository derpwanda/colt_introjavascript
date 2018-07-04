var age = 21;
//younger than 18 cant enter
if (age < 18) {
  message = 'Sorry, you mush be older than 18';
} else if (age < 21) {
//18 - 21 can enter but with x on hand
  message = 'You can enter, but we must mark your hand.'
} else {
//over 21 can enter
  message = 'Come on in!'
}

console.log(message);

// if age is negative number, print an error message
// if age is 21, print "happy 21st birthday!!"
// if age is odd, print "your age is odd!"
// bonus: if age is a perfect square, print "perfect square!"

//my solution
var age = 18;

if (age < 0) {
  console.log('error');
} else if (age == 21) {
  console.log('happy 21st birthday!!');
} else if (age % 2 > 0) {
  console.log('your age is odd!');
} else {
  console.log('perfect square!');
}

//cole's solution
var age = Number(prompt("What is your age?"));

if (age < 0) {
  console.log('Come back once you\'re out of the womb');
}

if(age === 21) {
  console.log('Happy 21st Birthday!');
}

if(age % 2 !== 0) {
  console.log('Your age is odd!');
}

if(age % Math.sqrt(age) === 0) {
  console.log('Your age is a perfect square!');
}