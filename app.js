'use strict';
var userName=prompt('what is your name?');
alert('Welcome! '+userName+'!'+' '+'Let\'s play a guessing game! Here are 5 questions total.');
//question One
var response1='';
response1=prompt('Do i speak cantonese? Please Enter Y/N.').toLowerCase();
while(response1.length==0){
alert('please enter your answer');
response1=prompt('Do i speak cantonese? Please Enter Y/N.').toLowerCase();
}

if(response1==='y'||response1==='yes'){
    alert('Yes. I can speak cantonese.');
}
else if(response1==='n'||response1==='no'){
    alert('No,I actually can speak cantonese.');
}
else{
    alert('looks like you don\'t enter Y/N.' );
}
console.log('Question1:Do i speak cantonese?');

//question two
var response2='';
response2=prompt('Do i like seafood? Please Enter Y/N.').toLowerCase();
while(response2.length==0){
    alert('please enter your answer');
    response2=prompt('Do i like seafood?Please Enter Y/N.').toLowerCase();
}
if(response2==='y'||response2==='yes'){
    alert('Yes. You are right.');
}
else if(response2==='n'||response2==='no'){
    alert('Not correct answer.');
}
else{
    alert('looks like you don\'t enter Y/N.' );
}
console.log('Question2:Do i like seafood?');

//question three
var response3='';
response3=prompt('Do i like cats? Please Enter Y/N.').toLowerCase();
while(response3.length==0){
    alert('please enter your answer');
    response3=prompt('Do i like cats? Please Enter Y/N.').toLowerCase();
}
if(response3==='y'||response3==='yes'){
    alert('Yes. who would not like cats!');
}
else if(response3==='n'||response3==='no'){
    alert('Not correct answer.');
}
else{
    alert('looks like you don\'t enter Y/N.' );
}
console.log('Question3:Do i like cats?');

//question four
var response4='';
response4=prompt('Do i live in seattle? Please Enter Y/N.').toLowerCase();
while(response4.length==0){
    alert('please enter your answer');
    response4=prompt('Do i live in seattle? Please Enter Y/N.').toLowerCase();
}
if(response4==='y'||response4==='yes'){
    alert('No,not a correct answer');
}
else if(response4==='n'||response4==='no'){
    alert('Correct, i don\'t live here');
}
else{
    alert('looks like you don\'t enter Y/N.' );
}
console.log('Question4:Do i live in seattle?');

//question five
var response5='';
response5=prompt('Do i like hiking? Please Enter Y/N.').toLowerCase();
while(response5.length==0){
    alert('please enter your answer');
    response5=prompt('Do i like hiking? Please Enter Y/N.').toLowerCase();
}
if(response5==='y'||response5==='yes'){
    alert('Yes, i like hiking.');
}
else if(response5==='n'||response5==='no'){
    alert('No, not correct answer');
}
else{
    alert('looks like you don\'t enter Y/N.' );
}
console.log('Question5:Do i like hiking?');