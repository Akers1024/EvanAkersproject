//first question
var name = prompt('Hello. What is your Name?');
console.log(name);

//second question          //persons name they entered in
var answer = prompt('So ' + name + ' , How are you doing today? Answer amazing or horrible');
console.log(answer); 

//Answer back to Q 2
if (answer === 'amazing') {
  alert('FANTASTIC!'); // if answered amazing
} else {  // If Not Answered horrible
  alert('Im Sorry! :('); // output
}


//Question 3
var qb = prompt(name + ' do you know anything about the QB for the Seattle Seahawks? Y or N');
console.log(qb);

//output
if (qb === 'Y') {
  alert('Good Im Glad!');
} else {
  alert('Maybe you can learn more!');
}



//Q4
var information = prompt('Would you like to know a little about the QB for the Seattle Seahawks? Y or N');
console.log(information);

if (information === 'Y') {
  alert('Lets Go Learn More!');
} else {
  alert('TOO BAD THAT SUCKS!')

}

