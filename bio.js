'use strict'

//Questions
var day = (', are you having a good day?');
var vaction = ('Have I been outside the U.S?');
var statelived = ('Have I lived outside washington?');





//greetings and log name
 
var name = prompt('Hello stranger, what is your name?');
alert('Nice to meet you ' + name + '. I always like meeting new people!');
console.log(name);





//question1 

function question2() {
    var goodDay = prompt(name + day);
    var askGoodDay = goodDay.toUpperCase();
    if ((askGoodDay === 'YES') || (askGoodDay === 'yes')) {
     alert(name + ', Thats awesome!');
    } else {
     alert(name + ', i\'m sorry I hope things get better!');
    }
    console.log('Is the user having a good day? ' + askGoodDay);
}
question2();

//Question2
function question3() {
    var tries = 3;
    var live = prompt(vaction);
    var outSide = live.toUpperCase();
    if ((outSide === 'YES') || (outSide === 'yes')) {
        alert(name + ', Thats correct! I have been to Canada and Mexico');
    } else {
        alert('Try again please...');
        //limit of answers
        if (--tries > 0);
        question3()
    }
    console.log('Have I been outside the use? ' + outSide);
}
question3();


 

//Question3
function question13() {
var seahawks;
while(true) {
    seahawks = prompt('Are the seahawks my favorite football team?');
    if (seahawks === 'Yes' || seahawks === 'yes') {
        break;
    }
    alert('Hmmmm try again..');
  
}
console.log('Are the seahwks my favorite team? ' + seahawks);
alert('GO Hawks!');
}
question13();
 




//Question4
function question11() {
var pig;
while (true) {
 pig = prompt('Do I own a mini pig');
 if (pig === 'No' ||  pig === 'no') {
     break;
 } 
 alert(name + ', That is the wrong answer...'); 
 
}
console.log('Do i own mini pig? ' + pig);
alert('correct! I wish I had one that would be badass!');
}
question11();



//question5
function question10() {
var siblingsDo = ['0', '1' , '2' , '3' , '4' , '5' , '6' , '7'];
var siblings;
while (true) {
    siblings = prompt('How many siblings do I have?');
    if (siblings === siblingsDo[2]) {
        break;
    }
    alert('Hmmmmmmm try again..');
    
}
console.log('How many siblings do I have? ' + siblingsDo[2]);
alert('correct! I have a older brother and younger sister.');

}
question10();








//question6

var howOld = ('How old am I?')
var ageNumber = 21;


var i = 0;

 function question7() {
 while( i < 4 ){
  var age = prompt(howOld);
   if (age < ageNumber){
     alert('I am not that young! try a higher number');
     console.log('You guessed ' + age + ' that is too low.');
   }
  else if (age > ageNumber){
    alert('DO I REALLY LOOK THAT OLD TO YOU!!? try lower number...');
    console.log('Your guess of ' + age + ' is too high.');
  }
  else if (ageNumber === parseInt(age)) {
    alert('Correct! I will be 22 on July 30th');
    console.log('You guessed the correct number. ' + age);
     break;
    }
  i++;
 
} 
 }
question7();



function question8() {
alert('How many years have I been golfing for? careful you only have 10 guesses!');

var answer = 10;
var guess = prompt("What's your guess?");

for (i=0; i<10; i++){
    if(answer == guess){
        alert(name + ', Good Job! Golfing is one of my favorite hobbies!');
        break;
    } else {
        guess = prompt("Hmmmm that's wrong try again.");
    }
}
} 
question8(); 

//break to page

