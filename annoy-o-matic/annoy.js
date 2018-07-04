// //ask the user "Are we there yet"
// var answer = prompt('Are we there yet?');

// //Keep asking again and again until they enter "yes"
// // or "yeah"
// while (answer !== 'yes' && answer !== 'yeah') {
//   var answer = prompt('Are we there yet?')
// }

// //then, alert "yay, we finally made it!"
// alert('Yay, We Made It!!')


//VERSION 2: can enter any string as long as
//contains "yes" in it.

//ask the user "Are we there yet"
var answer = prompt('Are we there yet?');

//Keep asking again and again until they enter "yes"
// or "yeah"
while (answer.indexOf('yes') === -1) {
  var answer = prompt('Are we there yet?')
}

//then, alert "yay, we finally made it!"
alert('Yay, We Made It!!')