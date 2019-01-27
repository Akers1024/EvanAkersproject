//first question
var name = prompt('Hello. What is your Name?');
console.log(name);

//second question          //evan
var answer = prompt('So ' + name + ' , Are you ready to learn how to code? Please answer Y or N.');
console.log(answer);

//Answer back
if (answer === 'Y') {
  alert('Hooray!'); // if answered Y
} else {  // If Not Answered Y
  alert('Boooo!'); // If Answered N 
}

