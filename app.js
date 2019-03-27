'use strict';
var userName=prompt('what is your name?');
while(userName===''){
  alert('please provide a name!');
  userName=prompt('what is your name?');
}
alert('Welcome! '+userName+'!'+' '+'Let\'s play a guessing game! Here are 5 questions total.');
var positiveAnswers=['y','yes','yeah','ya','sure','absolutely','ofcourse','definitely','ithinkso','ibet','yup','yep'];
var negtiveAnswers=['n','no','nah','nope','np','na','n/a','not really','maybenot','maynot'];
//question One
var response1='';
response1=prompt('Do i speak cantonese?').toLowerCase();
while(response1.length===0){
  alert('please enter your answer');
  response1=prompt('Do i speak cantonese?').toLowerCase();
}
var res1=response1.replace(' ','');
if(positiveAnswers.includes(res1)){
  alert('Yes. I can speak cantonese.');
}
else if(negtiveAnswers.includes(res1)){
  alert('No,I actually can speak cantonese.');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question1:Do i speak cantonese?');

//question two
var response2='';
response2=prompt('Do i like seafood?').toLowerCase();
while(response2.length===0){
  alert('please enter your answer');
  response2=prompt('Do i like seafood?').toLowerCase();
}
var res2=response2.replace(' ','');
if(positiveAnswers.includes(res2)){
  alert('Yes. You are right.');
}
else if(negtiveAnswers.includes(res2)){
  alert('Not correct answer.');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question2:Do i like seafood?');

//question three
var response3='';
response3=prompt('Do i like cats?').toLowerCase();
while(response3.length===0){
  alert('please enter your answer');
  response3=prompt('Do i like cats?').toLowerCase();
}
var res3=response3.replace(' ','');
if(positiveAnswers.includes(res3)){
  alert('Yes. who would not like cats!');
}
else if(negtiveAnswers.includes(res3)){
  alert('Not correct answer.');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question3:Do i like cats?');

//question four
var response4='';
response4=prompt('Do i live in seattle?').toLowerCase();
while(response4.length===0){
  alert('please enter your answer');
  response4=prompt('Do i live in seattle?').toLowerCase();
}
var res4=response4.replace(' ','');
if(positiveAnswers.includes(res4)){
  alert('No,not a correct answer');
}
else if(negtiveAnswers.includes(res4)){
  alert('Correct, i don\'t live here');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question4:Do i live in seattle?');

//question five
var response5='';
response5=prompt('Do i like hiking?').toLowerCase();
while(response5.length===0){
  alert('please enter your answer');
  response5=prompt('Do i like hiking?').toLowerCase();
}
var res5=response5.replace(' ','');
if(positiveAnswers.includes(res5)){
  alert('Yes, i like hiking.');
}
else if(negtiveAnswers.includes(res5)){
  alert('No, not correct answer');
}
else{
  alert('looks like you don\'t enter Y/N.' );
}
console.log('Question5:Do i like hiking?');
