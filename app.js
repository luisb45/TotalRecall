/*
// STRINGS 
let firstVariable = "Hello World";
firstVariable = 25; 

let secondVariable = firstVariable;
secondVariable = 'Yo' ;
//value of firstVariable is 25;

let yourName = 'Luis bustos';
let greeting = ("Hello, my name is " + yourName); 
console.log(greeting);



//BOOLEANS
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');



//the Farm
let animal = "pig";
if (animal === "cow") {
    console.log('moooo');
} else {
    console.log("Hey! You're not a cow.");
};



//Driver's Ed
let personsAge = 12;
if (personsAge >= 16){
    console.log('Here are the keys!');
} else {
    console.log("Sorry, you're too young.");
};



//LOOPS
//A - The Basics
for(let i = 0; i <= 10; i++) {
    console.log(i);
};

let loop2 = "";
for(let i = 10; i <= 400; i++) {
    loop2 += i + " ";
};
console.log(loop2);

let loop3 = "";
for(let i = 12; i <= 4000; i++) {
    if ( i % 3 == 0){
        loop3 += i + " ";
    }
};
console.log(loop3);



//B - Get Even 
for(let i = 1; i <= 100; i++){
    if ( i % 2 == 0){
       console.log( i + ' <-- is a even number '); 
    } else {
        console.log(i);
    }
};



//Give Me 5
for(let i = 1; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 == 0)) {
        console.log('I found a ' + i + ". High five!" + ' Three is a crowd')
    }else if (i % 5 == 0){
        console.log('I found a ' + i + ". High five!");
    } else if( i % 3 == 0){
        console.log('I found a ' + i + '. Three is a crowd');
    } else {
        console.log(i);
    }
};



//Savings Account
let bank_account = 0;
for(let i = 1; i <= 100; i++){
    bank_account += i * 2;
}
console.log(bank_account);




//ARRAYS & CONTROL FLOW
//Easy Does It
const quotes = ["quote 1", "quote 2", "quote 3"];



//Accessing elements
const randomThings = [1, 10, "Hello", true]
//1 
randomThings[0];
//2 
randomThings[2] = 'World';
//3
console.log(randomThings);



//Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//1
ourClass[2];
//2
ourClass[4] = 'Octocat';
//3
ourClass.push('Cloud City');
console.log(ourClass);



//Mix It Up
const myArray = [5, 10, 500, 20]
//1
myArray.push('Aegon', 'String');
//2
myArray.shift();
//3
myArray.unshift('Bob Marley');
//4
myArray.pop();
//5
myArray.reverse();
console.log(myArray);
//Mutate is the act of changing the properties of a value.
//Just the order of the array was changed.

*/

//Biggie Smalls