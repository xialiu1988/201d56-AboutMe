'use strict';
var score=0;
var userName=prompt('what is your name?');
while(!userName){
  alert('please provide a name!');
  userName=prompt('what is your name?');
}
alert('Welcome! '+userName+'!'+' '+'Let\'s play a guessing game! Here are 5 questions total.');
var positiveAnswers=['y','yes','yeah','ya','sure','absolutely','ofcourse','definitely','ithinkso','ibet','yup','yep'];
var negtiveAnswers=['n','no','nah','nope','np','na','n/a','not really','maybenot','maynot'];

//question One
var response1=prompt('Do i speak cantonese?');
while(!response1){
  alert('please enter your answer');
  response1=prompt('Do i speak cantonese?');
}
var res1=response1.toLowerCase().replace(' ','');
if(positiveAnswers.includes(res1)){
  alert('Yes. I can speak cantonese.');
  score++;
}
else if(negtiveAnswers.includes(res1)){
  alert('No,I actually can speak cantonese.');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question1:Do i speak cantonese?');

//question two
var response2=prompt('Do i like seafood?');
while(!response2){
  alert('please enter your answer');
  response2=prompt('Do i like seafood?');
}
var res2=response2.toLowerCase().replace(' ','');
if(positiveAnswers.includes(res2)){
  alert('Yes. You are right.');
  score++;
}
else if(negtiveAnswers.includes(res2)){
  alert('Not correct answer.');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question2:Do i like seafood?');

//question three
var response3=prompt('Do i like cats?');
while(!response3){
  alert('please enter your answer');
  response3=prompt('Do i like cats?');
}
var res3=response3.toLowerCase().replace(' ','');
if(positiveAnswers.includes(res3)){
  alert('Yes. who would not like cats!');
  score++;
}
else if(negtiveAnswers.includes(res3)){
  alert('Not correct answer.');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question3:Do i like cats?');

//question four
var response4=prompt('Do i live in seattle?');
while(!response4){
  alert('please enter your answer');
  response4=prompt('Do i live in seattle?');
}
var res4=response4.toLowerCase().replace(' ','');
if(positiveAnswers.includes(res4)){
  alert('No,not a correct answer');
}
else if(negtiveAnswers.includes(res4)){
  alert('Correct, i don\'t live here');
  score++;
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question4:Do i live in seattle?');

//question five
var response5=prompt('Do i like hiking?');
while(!response5){
  alert('please enter your answer');
  response5=prompt('Do i like hiking?');
}
var res5=response5.toLowerCase().replace(' ','');
if(positiveAnswers.includes(res5)){
  alert('Yes, i like hiking.');
  score++;
}
else if(negtiveAnswers.includes(res5)){
  alert('No, not correct answer');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question5:Do i like hiking?');

//question six
var response6=prompt('How many times i have been to Disneyland');
var guessingNum=0;
while(parseInt(response6)!==3&& guessingNum<3){
  if(parseInt(response6)>3){
    alert('too high');
  }
  else if(parseInt(response6)<3){
    alert('too low');
  }
  else{
    alert('please enter a number');
  }
  response6=prompt('How many times i have been to Disneyland');
  guessingNum++;
}

if(parseInt(response6)===3){
  alert('Yes!');
  score++;
}
else{
  alert('wrong answer');
}
console.log('Question6:How many times i have been to Disneyland');

//question7
var response7=prompt('what fruit i like');
var possibleAnswer=['apple','strawberry','dragonfruit','watermelon'];
var attemptNum=0;
while(!possibleAnswer.includes(response7.toLowerCase())&&attemptNum<5){
  alert('nope i like red color fruits');
  response7=prompt('what fruit i like');
  attemptNum++;
}

if(possibleAnswer.includes(response7.toLowerCase())){
  alert('Yes');
  score++;
}
else{
  alert('No.');
}
console.log('Question7:what fruit i like');
alert(userName+', You got '+score+' out of 7 questions correct!');

